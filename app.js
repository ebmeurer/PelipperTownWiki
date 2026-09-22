(function(){
'use strict';
const DATA=window.PELIPPER_DATA||{};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>String(s??'').toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const title=s=>String(s??'').replace(/([a-z])([A-Z])/g,'$1 $2').replace(/[_-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
const rawPath=p=>String(p||'').replace(/^\/+/,'');
const sourceName=p=>p.split('/').pop().replace(/\.json$/i,'');
const sourceLabel=p=>title(sourceName(p));

const records=[];
const species=new Map(), trainers=new Map(), companions=new Map(), locations=new Map(), forms=new Map(), items=new Map();
function add(map,key,val,source){if(!key)return; if(!map.has(key)) map.set(key,{...val,_sources:[]}); const x=map.get(key); x._sources.push(source); Object.assign(x,val);}
function speciesId(x){return x?.SpeciesId||x?.speciesId||x?.Id||x?.id||x?.Presentation?.Id||null}
function processSource(path,obj){
  const src={path, label:sourceLabel(path), obj};
  records.push(src);
  function walk(v,key){
    if(Array.isArray(v)){
      for(const x of v){
        if(!x||typeof x!=='object'||Array.isArray(x)) continue;
        const id=speciesId(x);
        if((key||'').toLowerCase().includes('species') && id) add(species,id,x,path);
        if((key||'').toLowerCase().includes('trainer') && (x.Id||x.id||x.DisplayName)) add(trainers,x.Id||x.id||x.DisplayName,x,path);
        if((key||'').toLowerCase().includes('companion') && (x.NpcName||x.Id)) add(companions,x.NpcName||x.Id,x,path);
        if((key||'').toLowerCase().includes('form') && (x.Id||x.Presentation?.Id)) add(forms,x.Id||x.Presentation?.Id,x,path);
        if((key||'').toLowerCase().includes('table') && (x.Id||x.Location)) add(locations,x.Id||x.Location,x,path);
        for(const [k2,v2] of Object.entries(x)) walk(v2,k2);
      }
    }else if(v&&typeof v==='object'){
      for(const [k2,v2] of Object.entries(v)) walk(v2,k2);
    }
  }
  walk(obj,'');
}
for(const [p,o] of Object.entries(DATA)) processSource(p,o);

// Pull species referenced by other datasets into a lightweight index even when their full record is elsewhere.
const refSpecies=new Map();
function collectRefs(v){
  if(Array.isArray(v)) v.forEach(collectRefs);
  else if(v&&typeof v==='object'){
    for(const [k,x] of Object.entries(v)){
      if(/speciesid|species$/i.test(k)&&typeof x==='string') refSpecies.set(x,true);
      collectRefs(x);
    }
  }
}
Object.values(DATA).forEach(collectRefs);
for(const id of refSpecies.keys()) if(!species.has(id)) species.set(id,{Id:id,DisplayName:title(id),_sources:[]});

function firstDisplay(x){return x?.DisplayName||x?.Name||x?.NpcName||x?.Presentation?.DisplayName||x?.Id||x?.id||x?.Presentation?.Id||x?.SpeciesId||'Unnamed'}
const megaFormsBySpecies=new Map();
for(const [formId,form] of forms){
  const base=form?.BaseSpeciesId;
  const presentation=form?.Presentation||{};
  const isMega=String(presentation?.FormId||form?.FormId||'').toLowerCase().startsWith('mega')
    || String(formId).toLowerCase().startsWith('mega-')
    || String(presentation?.Id||'').toLowerCase().startsWith('mega-');
  if(base && isMega){
    if(!megaFormsBySpecies.has(base)) megaFormsBySpecies.set(base,[]);
    megaFormsBySpecies.get(base).push({id:formId,x:form,name:firstDisplay(form)});
  }
}
for(const list of megaFormsBySpecies.values()) list.sort((a,b)=>a.name.localeCompare(b.name));
function imageFor(x){
  const candidates=[x?.PortraitPath,x?.SpritePath,x?.Presentation?.PortraitPath,x?.Presentation?.SpritePath];
  for(const p of candidates) if(p) return rawPath(p);
  return null;
}
function typeOfEntity(x){
  if(x?.Types) return 'Pokémon';
  if(x?.NpcName) return 'Villager';
  if(x?.Party||x?.FirstYearTeam) return 'Trainer';
  if(x?.BaseSpeciesId) return 'Form';
  return 'Entity';
}
function allSearch(){
  const out=[];
  for(const [id,x] of species) out.push({kind:'species',id,name:firstDisplay(x),meta:'Pokémon',desc:x.Description||'',img:imageFor(x)});
  for(const [id,x] of trainers) out.push({kind:'trainer',id,name:firstDisplay(x),meta:'Trainer',desc:'Trainer battle data',img:imageFor(x)});
  for(const [id,x] of companions) out.push({kind:'companion',id,name:firstDisplay(x),meta:'Villager companion',desc:'Villager companion data',img:imageFor(x)});
  for(const [id,x] of forms) out.push({kind:'form',id,name:firstDisplay(x),meta:'Form / evolution',desc:x.Presentation?.DisplayName||'',img:imageFor(x)});
  return out;
}
const SEARCH=allSearch();

function href(kind,id){return `#/wiki/${kind}/${encodeURIComponent(id)}`}
function linkForId(id){ return genericRefs.has(id) ? refLink(id) : `<span class="pill">${esc(id)}</span>`; }
function primitive(v){
  if(v===null||v===undefined)return '—';
  if(typeof v==='boolean')return v?'Yes':'No';
  if(typeof v==='number')return Number.isInteger(v)?String(v):String(Math.round(v*1000)/1000);
  if(typeof v==='string'){
    if(species.has(v)||trainers.has(v)||companions.has(v)) return linkForId(v);
    return esc(v);
  }
  return null;
}
function pretty(v,depth=0){
  const p=primitive(v); if(p!==null)return p;
  if(Array.isArray(v)){
    if(!v.length)return '<span class="muted">None</span>';
    if(v.every(x=>typeof x==='string'||typeof x==='number'||typeof x==='boolean')) return v.map(x=>primitive(x)).join(' ');
    return `<div>${v.slice(0,100).map(x=>`<div class="code" style="margin:5px 0">${pretty(x,depth+1)}</div>`).join('')}${v.length>100?'<div class="notice">Only the first 100 items are shown.</div>':''}</div>`;
  }
  if(v&&typeof v==='object'){
    if(depth>3) return `<div class="code">${esc(JSON.stringify(v))}</div>`;
    return `<dl class="kv">${Object.entries(v).map(([k,x])=>`<dt>${esc(title(k))}</dt><dd>${pretty(x,depth+1)}</dd>`).join('')}</dl>`;
  }
  return esc(String(v));
}
function genderRateLabel(v){
  if(v===undefined||v===null||v==='') return '';
  const n=Number(v);
  if(!Number.isNaN(n)){
    if(n===-1) return 'Genderless';
    if(n===0) return '100% male · 0% female';
    if(n===8) return '0% male · 100% female';
    if(n>=0 && n<=8){ const female=n*12.5; const male=100-female; return `${male}% male · ${female}% female`; }
  }
  return String(v);
}
function infobox(x,name,img){
  const keys=['NationalDex','Generation','Types','GenderRate','BaseSpeciesId','FormId','Tier','MarriageCandidate','Season','Rung'];
  const rows=[];
  for(const k of keys) if(x?.[k]!==undefined) { const value=k==='GenderRate'?esc(genderRateLabel(x[k])):pretty(x[k]); rows.push(`<div class="kv"><dt>${esc(k==='GenderRate'?'Gender':title(k))}</dt><dd>${value}</dd></div>`); }
  return `<aside class="infobox"><div class="infobox-title">${esc(name)}</div>${img?`<img class="infobox-img" src="${esc(img)}" alt="${esc(name)}" onerror="this.style.display='none'">`:''}${rows.join('')}</aside>`;
}
function breadcrumbs(parts){return `<div class="breadcrumbs"><a href="#/">Home</a>${parts.map((p,i)=>`<span>›</span>${p.href?`<a href="${p.href}">${esc(p.label)}</a>`:esc(p.label)}`).join('')}</div>`}
function entityLinksFrom(x){
  const found=new Set();
  const scan=v=>{
    if(Array.isArray(v)) v.forEach(scan);
    else if(v&&typeof v==='object') Object.entries(v).forEach(([k,y])=>{
      if(typeof y==='string' && genericRefs.has(y) && /(^|id$|ids$|species|move|ability|form|trainer|npc|companion|item|location)/i.test(k)) found.add(y);
      scan(y);
    });
  };
  scan(x); return [...found].slice(0,120);
}
function evolutionGraph(){
  const nodes=new Map();
  const add=(s)=>{
    if(!s?.Id)return;
    const id=s.Id;
    if(!nodes.has(id)) nodes.set(id,{id,next:[],prev:[]});
    if(Array.isArray(s.Evolutions)) for(const e of s.Evolutions){
      const to=e?.SpeciesId;
      if(!to || !species.has(to) || to===id) continue;
      const n=nodes.get(id); if(!n.next.some(x=>x.SpeciesId===to)) n.next.push(e);
      if(!nodes.has(to)) nodes.set(to,{id:to,next:[],prev:[]});
      const t=nodes.get(to); if(!t.prev.some(x=>x.SpeciesId===id)) t.prev.push({SpeciesId:id,Conditions:e?.Conditions||[]});
    }
  };
  for(const r of records){
    const obj=r.obj;
    if(Array.isArray(obj?.Species)) obj.Species.forEach(add);
  }
  return nodes;
}
const evoGraph=evolutionGraph();
function evolutionLine(id){
  if(!species.has(id)) return [];
  const related=new Set([id]);
  const walk=(cur,dir)=>{
    const links=evoGraph.get(cur)?.[dir]||[];
    for(const e of links){
      const to=e?.SpeciesId;
      if(to && species.has(to) && !related.has(to)){related.add(to);walk(to,dir);}
    }
  };
  walk(id,'prev'); walk(id,'next');
  return [...related];
}
function evolutionStages(id){
  const related=new Set(evolutionLine(id));
  if(!related.size)return [];
  const roots=[...related].filter(candidate=>!(evoGraph.get(candidate)?.prev||[]).some(e=>related.has(e.SpeciesId)));
  const stage=new Map();
  const queue=roots.sort().map(root=>[root,1]);
  for(const [root,n] of queue) stage.set(root,n);
  for(let i=0;i<queue.length;i++){
    const [cur,n]=queue[i];
    for(const e of (evoGraph.get(cur)?.next||[])){
      const to=e?.SpeciesId;
      if(!related.has(to))continue;
      const nextStage=n+1;
      if(!stage.has(to) || nextStage<stage.get(to)){
        stage.set(to,nextStage);
        queue.push([to,nextStage]);
      }
    }
  }
  // Keep any unusual/disconnected related node visible rather than dropping source data.
  let fallback=Math.max(0,...stage.values())+1;
  for(const sid of related) if(!stage.has(sid)) stage.set(sid,fallback++);
  const maxStage=Math.max(...stage.values());
  return Array.from({length:maxStage},(_,i)=>{
    const number=i+1;
    const nodes=[...related].filter(sid=>stage.get(sid)===number).sort((a,b)=>firstDisplay(species.get(a)).localeCompare(firstDisplay(species.get(b))));
    return {number,nodes};
  }).filter(x=>x.nodes.length);
}
function evolutionConditions(conditions){
  if(!Array.isArray(conditions)||!conditions.length)return '';
  return conditions.map(c=>{
    if(!c||typeof c!=='object') return esc(String(c));
    const parts=[]; if(c.Kind!==undefined) parts.push(title(String(c.Kind)));
    if(c.Amount!==undefined) parts.push(String(c.Amount));
    if(c.Value!==undefined) parts.push(title(String(c.Value)));
    return parts.join(': ');
  }).join(' · ');
}
function renderEvolutionSection(id){
  const stages=evolutionStages(id); if(!stages.length)return '';
  const related=new Set(stages.flatMap(stage=>stage.nodes));
  const columns=stages.map((stage,index)=>{
    const cards=stage.nodes.map(sid=>{
      const current=sid===id;
      const incoming=(evoGraph.get(sid)?.prev||[]).filter(e=>related.has(e.SpeciesId));
      const conditions=incoming.map(e=>evolutionConditions(e.Conditions)).filter(Boolean);
      return `<a class="evolution-card${current?' current':''}" href="${href('species',sid)}"><div class="evo-step">Stage ${stage.number}</div><div class="card-title">${esc(firstDisplay(species.get(sid)))}</div><div class="card-meta">${esc(sid)}</div>${conditions.length?`<div class="evo-conditions"><span class="muted">From previous stage</span><strong>${esc(conditions.join(' / '))}</strong></div>`:''}${current?'<span class="current-badge">Current Pokémon</span>':''}</a>`;
    }).join('');
    return `<div class="evolution-stage"><div class="evolution-stage-label">Stage ${stage.number}</div><div class="evolution-stage-cards">${cards}</div></div>${index<stages.length-1?'<div class="evolution-stage-arrow" aria-hidden="true">→</div>':''}`;
  }).join('');
  return `<section class="section evolution-section"><div class="section-heading"><div><h2>Evolution Line</h2><p class="muted">Evolution stages are aligned horizontally; branching evolutions are kept at the same stage and each destination shows its recorded condition.</p></div></div><div class="evolution-tree">${columns}</div></section>`;
}
function renderMegaEvolutionSection(id){
  const megas=megaFormsBySpecies.get(id)||[];
  if(!megas.length)return '';
  const cards=megas.map(m=>{
    const x=m.x||{};
    const img=imageFor(x);
    return `<a class="card mega-card" href="${href('form',m.id)}">${img?`<img class="mega-card-img" src="${esc(img)}" alt="" onerror="this.style.display='none'">`:''}<div class="card-title">${esc(m.name)}</div><div class="card-meta">${esc(m.id)}</div></a>`;
  }).join('');
  return `<section class="section mega-evolution-section"><div class="section-heading"><div><h2>Mega Evolutions</h2><p class="muted">Mega forms available for this Pokémon in the supplied mod data.</p></div><span class="pill">${megas.length} mega form${megas.length===1?'':'s'}</span></div><div class="grid mega-grid">${cards}</div></section>`;
}
function extractJobs(x){
  const jobs=[];
  const scan=(v,path='')=>{
    if(Array.isArray(v)){v.forEach((y,i)=>scan(y,path+'['+i+']'));return}
    if(v&&typeof v==='object') for(const [k,y] of Object.entries(v)){
      const p=(path+'.'+k).toLowerCase();
      if(/job|work|task|profession|role|farm|fish|mine|forag|cook|water|chop|gather|craft/i.test(p)){
        if(typeof y==='string'||typeof y==='number'||typeof y==='boolean') jobs.push([k,y]);
        else if(Array.isArray(y)) y.forEach(z=>{if(typeof z==='string'||typeof z==='number')jobs.push([k,z])});
      }
      if(y&&typeof y==='object')scan(y,path+'.'+k);
    }
  };
  scan(x); const seen=new Set();
  return jobs.filter(([k,v])=>{const z=k+'|'+v;if(seen.has(z))return false;seen.add(z);return true});
}
function renderJobs(x){
  const jobs=extractJobs(x); if(!jobs.length)return '';
  const grouped={}; jobs.forEach(([k,v])=>{const label=title(k.replace(/Ids?$|Values?$/i,''));(grouped[label]??=[]).push(String(v));});
  return `<section class="section jobs-section"><h2>Jobs & Work</h2><p class="muted">Work capabilities recorded in the supplied dataset.</p><div class="job-grid">${Object.entries(grouped).map(([k,vals])=>`<div class="job-card"><div class="job-icon">✦</div><div><h3>${esc(k)}</h3><div class="job-values">${vals.map(v=>`<span class="pill">${esc(title(v))}</span>`).join('')}</div></div></div>`).join('')}</div></section>`;
}
// Build cross-dataset indexes for abilities and moves. IDs are the stable link between
// a species' AbilityIds/DefaultMoveIds/Learnset and the full definitions in the datasets.
const abilityIndex=new Map(), moveIndex=new Map();
const genericRefs=new Map();
for(const src of records){
  const obj=src.obj;
  if(Array.isArray(obj?.Abilities)) for(const a of obj.Abilities) if(a?.Id && !abilityIndex.has(a.Id)) abilityIndex.set(a.Id,{...a,_source:src.path});
  if(Array.isArray(obj?.Moves)) for(const m of obj.Moves) if(m?.Id && !moveIndex.has(m.Id)) moveIndex.set(m.Id,{...m,_source:src.path});
}
function abilityFor(id){ return abilityIndex.get(id); }
function moveFor(id){ return moveIndex.get(id); }

// Index every resolvable cross-reference by its original ID. When the same ID
// exists in more than one dataset, the first complete definition is retained.
for(const [id,x] of species) if(!genericRefs.has(id)) genericRefs.set(id,{kind:'species',id,x});
for(const [id,x] of forms) if(!genericRefs.has(id)) genericRefs.set(id,{kind:'form',id,x});
for(const [id,x] of trainers) if(!genericRefs.has(id)) genericRefs.set(id,{kind:'trainer',id,x});
for(const [id,x] of companions) if(!genericRefs.has(id)) genericRefs.set(id,{kind:'companion',id,x});
for(const [id,x] of abilityIndex) if(!genericRefs.has(id)) genericRefs.set(id,{kind:'ability',id,x});
const abilityUsers=new Map();
for(const [speciesIdValue,x] of species){
  for(const abilityId of (Array.isArray(x?.AbilityIds)?x.AbilityIds.filter(Boolean):[])){
    if(!abilityUsers.has(abilityId)) abilityUsers.set(abilityId,[]);
    abilityUsers.get(abilityId).push({id:speciesIdValue,name:firstDisplay(x),x});
  }
}
for(const users of abilityUsers.values()) users.sort((a,b)=>a.name.localeCompare(b.name));
for(const [id,x] of moveIndex) if(!genericRefs.has(id)) genericRefs.set(id,{kind:'move',id,x});
function refName(ref){
  const x=ref?.x||{};
  return x.DisplayName||x.Name||x.NpcName||x.Presentation?.DisplayName||title(ref?.id||'');
}
function refLink(id){
  const ref=genericRefs.get(id);
  if(!ref) return `<span class="pill">${esc(id)}</span>`;
  const name=refName(ref);
  if(ref.kind==='species'||ref.kind==='form'||ref.kind==='trainer'||ref.kind==='companion'||ref.kind==='move'||ref.kind==='ability') return `<a class="xref" href="${href(ref.kind,ref.id)}">${esc(name)} <small>${esc(ref.id)}</small></a>`;
  return esc(name);
}
function abilityIdsFor(x){ return Array.isArray(x?.AbilityIds)?x.AbilityIds.filter(Boolean):[]; }
function moveIdsFor(x){
  const ids=[];
  if(Array.isArray(x?.DefaultMoveIds)) ids.push(...x.DefaultMoveIds);
  if(Array.isArray(x?.Learnset)) for(const l of x.Learnset) if(l?.MoveId) ids.push(l.MoveId);
  return [...new Set(ids)];
}
function abilityDescription(a){ return a?.Description || ''; }
function formatMoveValue(v){
  if(v===null || v===undefined) return '';
  if(Array.isArray(v) || (typeof v==='object' && v!==null)) return JSON.stringify(v,null,2);
  return String(v);
}
function moveFields(m){
  if(!m) return [];
  const fields=[
    ['Type','Type'],['Category','Category'],['Power','Power'],['RangeTiles','Range (tiles)'],
    ['RadiusTiles','Radius (tiles)'],['CooldownTicks','Cooldown (ticks)'],['RecoveryTicks','Recovery (ticks)'],
    ['EnergyCost','Energy cost'],['Knockback','Knockback'],['CritChance','Critical chance'],['Priority','Priority'],
    ['TargetsMultiple','Targets multiple'],['MakesContact','Makes contact'],['Target','Target'],
    ['AnimationClip','Animation clip'],['StatusId','Status'],['StatusChance','Status chance'],
    ['StatusDurationTicks','Status duration (ticks)'],['StatusMagnitude','Status magnitude'],
    ['StatChangeChance','Stat change chance'],['StatChanges','Stat changes'],['HealingFraction','Healing fraction'],
    ['SelfHealingFraction','Self-healing fraction'],['Movement','Movement'],['AiTags','AI tags'],['EffectCues','Effect cues']
  ];
  return fields.filter(([key])=>Object.prototype.hasOwnProperty.call(m,key)).map(([key,label])=>({key,label,value:formatMoveValue(m[key])}));
}
function renderAbilities(x){
  const ids=abilityIdsFor(x); if(!ids.length)return '';
  const cards=ids.map(id=>{
    const a=abilityFor(id); if(!a) return '';
    const name=a.DisplayName||title(id);
    return `<article class="ability-card"><div class="ability-head"><h3><a href="${href('ability',id)}">${esc(name)}</a></h3><a class="pill link" href="${href('ability',id)}">${esc(id)}</a></div>${a.Description?`<p>${esc(a.Description)}</p>`:''}${a.Trigger?`<div class="move-meta"><span>Trigger</span><b>${esc(title(a.Trigger))}</b></div>`:''}${a.Scope?`<div class="move-meta"><span>Scope</span><b>${esc(title(a.Scope))}</b></div>`:''}</article>`;
  }).join('');
  return cards?`<section class="section abilities-section"><h2>Abilities</h2><div class="ability-grid">${cards}</div></section>`:'';
}
function chanceLabel(v){
  if(v===undefined||v===null||v==='') return '';
  const n=Number(v);
  if(Number.isFinite(n) && n>=0 && n<=1) return `${n*100}%`;
  return formatMoveValue(v);
}
function statChangesLabel(v){
  if(!Array.isArray(v)||!v.length) return '';
  return v.map(c=>{
    if(!c||typeof c!=='object') return String(c);
    const stat=title(c.Stat||'Stat');
    const stages=Number(c.Stages);
    const stageText=Number.isFinite(stages)?`${stages>0?'+':''}${stages} stage${Math.abs(stages)===1?'':'s'}`:'';
    const target=c.Target?` · ${title(c.Target)}`:'';
    const duration=c.DurationTicks!==undefined?` · ${c.DurationTicks} ticks`:'';
    return `${stat} ${stageText}${target}${duration}`;
  }).join(' · ');
}
function moveHighlighted(m){
  const category=String(m?.Category||'').toLowerCase();
  const parts=[];
  if(m?.Type!==undefined) parts.push(`Type: ${formatMoveValue(m.Type)}`);
  if(m?.Category!==undefined) parts.push(`Category: ${formatMoveValue(m.Category)}`);
  if(category!=='status' && m?.Power!==undefined) parts.push(`Power: ${formatMoveValue(m.Power)}`);
  if(m?.StatChanges!==undefined){ const v=statChangesLabel(m.StatChanges); if(v) parts.push(`Stat changes: ${v}`); }
  if(m?.StatChangeChance!==undefined) parts.push(`Stat change chance: ${chanceLabel(m.StatChangeChance)}`);
  if(m?.StatusId!==undefined && m?.StatusId!==null && m?.StatusId!==''){
    const chance=m?.StatusChance!==undefined?` · ${chanceLabel(m.StatusChance)}`:'';
    parts.push(`Status: ${title(m.StatusId)}${chance}`);
  }
  return parts;
}
function renderMoveLine(id,level){
  const m=moveFor(id); if(!m) return '';
  const name=m.DisplayName||title(id);
  const fields=moveFields(m).filter(f=>!['EffectId','Type','Category','Power','StatusId','StatusChance','StatChanges','StatChangeChance'].includes(f.key));
  const highlighted=moveHighlighted(m).map(v=>`<span class="move-highlight">${esc(v)}</span>`).join('');
  const compact=fields.map(f=>`<span class="move-field"><b>${esc(f.label)}:</b> ${esc(f.value)}</span>`).join('');
  return `<div class="move-row"><span class="level-badge">${esc(level===undefined||level===''?'—':(level==='Default'?'Default':`Lv. ${level}`))}</span><a class="move-name" href="${href('move',id)}">${esc(name)}</a><span class="move-id">${esc(id)}</span><div class="move-highlight-fields">${highlighted||'<span class="muted">—</span>'}</div><div class="move-inline-fields">${compact}</div></div>`;
}
function renderMoveCard(id,level){
  const m=moveFor(id); if(!m) return '';
  const name=m.DisplayName||title(id);
  const fields=moveFields(m).filter(f=>f.key!=='EffectId');
  return `<article class="move-card"><div class="move-head"><div><h3>${esc(name)}</h3><span class="pill">${esc(id)}</span></div>${level!==undefined?`<span class="level-badge">${esc(level==='Default'?'Default':`Lv. ${level}`)}</span>`:''}</div>${m.Description?`<p class="move-description">${esc(m.Description)}</p>`:''}<dl class="move-stats">${fields.map(f=>`<div><dt>${esc(f.label)}</dt><dd class="move-value${/JSON/.test(f.value)?' move-json':''}">${esc(f.value)}</dd></div>`).join('')}</dl></article>`;
}
function renderLearnset(x){
  const learn=Array.isArray(x?.Learnset)?x.Learnset.filter(l=>l?.MoveId):[];
  const defaults=Array.isArray(x?.DefaultMoveIds)?x.DefaultMoveIds.filter(Boolean):[];
  if(!learn.length && !defaults.length)return '';
  const rows=learn.map(l=>renderMoveLine(l.MoveId,l.Level)).join('');
  const known=new Set(learn.map(l=>l.MoveId));
  const defaultRows=defaults.filter(id=>!known.has(id)).map(id=>renderMoveLine(id,'Default')).join('');
  return `<section class="section learnset-section"><div class="section-heading"><div><h2>Learnset & Moves</h2><p class="muted">Only move data present in the supplied Pelipper Town JSON files is shown.</p></div><span class="pill">${learn.length} level-up moves</span></div>${defaultRows?`<h3 class="subheading">Default moves</h3><div class="move-list">${defaultRows}</div>`:''}${learn.length?`<h3 class="subheading">Level-up learnset</h3><div class="move-list">${rows}</div>`:''}</section>`;
}
function renderEntity(kind,id){
  const map={species,trainer:trainers,companion:companions,form:forms,move:moveIndex,ability:abilityIndex}[kind], x=map?.get(id);
  if(!x)return `<div class="empty"><h2>Entity not found</h2><p>The requested identifier is not present in the supplied data.</p><a href="#/">Return to home</a></div>`;
  const name=firstDisplay(x), img=imageFor(x), intro=x.Description||x.description||'';
  let body=`${breadcrumbs([{label:title(kind)},{label:name}])}<div class="entity-head"><div><h1>${esc(name)}</h1><p class="lead">${esc(intro)}</p></div>${infobox(x,name,img)}</div>`;
  if(kind==='species'){
    body+=renderJobs(x)+renderAbilities(x)+renderLearnset(x)+renderEvolutionSection(id)+renderMegaEvolutionSection(id)+`<div class="section"><h2>Information</h2>${renderImportant(x)}</div>`;
  } else {
    body+=`<div class="section"><h2>Information</h2>${renderImportant(x)}</div>`;
  }
  if(kind==='move'){ body+=`<section class="section"><h2>Move data</h2>${renderMoveCard(id,'')}</section>`; }
  if(kind==='ability'){
    const users=abilityUsers.get(id)||[];
    body+=`<section class="section"><h2>Ability data</h2><article class="ability-card"><div class="ability-head"><h3>${esc(x.DisplayName||title(id))}</h3><span class="pill">${esc(id)}</span></div>${x.Description?`<p>${esc(x.Description)}</p>`:''}${x.Trigger?`<div class="move-meta"><span>Trigger</span><b>${esc(title(x.Trigger))}</b></div>`:''}${x.Scope?`<div class="move-meta"><span>Scope</span><b>${esc(title(x.Scope))}</b></div>`:''}</article></section>`;
    body+=`<section class="section"><div class="section-heading"><div><h2>Pokémon with this ability</h2><p class="muted">Pokémon whose supplied JSON records reference this ability.</p></div><span class="pill">${users.length} Pokémon</span></div><div class="xref-grid">${users.length?users.map(u=>`<a class="card" href="${href('species',u.id)}"><div class="card-title">${esc(u.name)}</div><div class="card-meta">${esc(u.id)}</div></a>`).join(''):'<div class="notice">No Pokémon references this ability in the supplied dataset.</div>'}</div></section>`;
  }
  const refs=entityLinksFrom(x);
  if(refs.length)body+=`<section class="section"><h2>Related references</h2><div class="xref-grid">${refs.filter(r=>r!==id).map(r=>{const rr=genericRefs.get(r); return rr?`<a class="card" href="${href(rr.kind,r)}"><div class="card-title">${esc(refName(rr))}</div><div class="card-meta">${esc(rr.kind)} · ${esc(r)}</div></a>`:''}).join('')}</div></section>`;
  body+=`<section class="section"><h2>Data from source</h2><div class="code">${esc(JSON.stringify(x,null,2))}</div></section><section class="section"><h2>Source datasets</h2><ul class="clean">${(x._sources||[]).map(s=>`<li>${esc(sourceLabel(s))}</li>`).join('')}</ul></section>`;
  return body;
}
function renderImportant(x){
  const preferred=['Types','Jobs','BaseStats','Progression','Behavior','AbilityIds','DefaultMoveIds','Encounter','FirstYearTeam','LaterYearsTeam','Party','Choices'];
  const parts=[];
  for(const k of preferred) if(x[k]!==undefined) parts.push(`<section><h3>${esc(title(k))}</h3>${pretty(x[k])}</section>`);
  return parts.join('')||'<div class="notice">No high-level structured fields were identified for this record.</div>';
}
function categoryCards(){
  const cats=[
    ['species','Pokémon',species.size,'Browse species and their data.'],
    ['trainer','Trainers',trainers.size,'Trainer battle records found in the dataset.'],
    ['companion','Villager Companions',companions.size,'Villager partner assignments and choices.'],
    ['form','Forms & Evolutions',forms.size,'Form records and transformation variants.'],
  ];
  return cats.map(c=>`<a class="card" href="#/category/${c[0]}"><div class="card-title">${c[1]}</div><div class="card-meta">${c[2].toLocaleString()} records</div><div class="card-desc">${c[3]}</div></a>`).join('');
}
function home(){
  const totalRefs=[...new Set([...records.flatMap(r=>r.path)])].length;
  return `<div class="hero">${breadcrumbs([])}<h1>Pelipper Town Wiki</h1><p class="lead">A data-driven reference built from the supplied Pelipper Town README and JSON datasets. The interface exposes structured records, cross-references and source data without inventing missing content.</p><div class="stats"><div class="stat"><b>${species.size.toLocaleString()}</b><span>Pokémon indexed</span></div><div class="stat"><b>${trainers.size}</b><span>trainer records</span></div><div class="stat"><b>${companions.size}</b><span>villager records</span></div><div class="stat"><b>${Object.keys(DATA).length}</b><span>JSON datasets</span></div></div></div>
  <h2>Browse the Wiki</h2><div class="grid">${categoryCards()}</div>
  <h2>Data sources</h2><div class="notice">The wiki indexes the supplied JSON files and preserves source values. The original README is available under <a href="#/documentation">Documentation</a>.</div>`;
}
function listCategory(kind){
  const map={species,trainer:trainers,companion:companions,form:forms}[kind];
  if(!map)return `<div class="empty">Unknown category.</div>`;
  const items=[...map.entries()].map(([id,x])=>({id,name:firstDisplay(x),desc:x.Description||x.description||'',img:imageFor(x)}));
  items.sort((a,b)=>a.name.localeCompare(b.name));
  let page=1; const size=60;
  const render=()=>{const q=($('#catFilter')?.value||'').toLowerCase(); const filtered=items.filter(x=>(x.name+' '+x.id+' '+x.desc).toLowerCase().includes(q)); const pages=Math.max(1,Math.ceil(filtered.length/size)); page=Math.min(page,pages); const slice=filtered.slice((page-1)*size,page*size);
    const cards=slice.map(x=>`<a class="card" href="${href(kind,x.id)}">${x.img?`<img src="${esc(x.img)}" alt="" style="width:72px;height:72px;object-fit:contain;float:right" onerror="this.style.display='none'">`:''}<div class="card-title">${esc(x.name)}</div><div class="card-meta">${esc(x.id)}</div><div class="card-desc">${esc(x.desc)}</div></a>`).join('');
    $('#catResults').innerHTML=cards||'<div class="empty">No matching records.</div>';
    $('#pager').innerHTML=`<button ${page<=1?'disabled':''} data-p="-1">Previous</button><span class="pill">Page ${page} of ${pages}</span><button ${page>=pages?'disabled':''} data-p="1">Next</button>`;
    $('#pager').querySelectorAll('button').forEach(b=>b.onclick=()=>{page+=Number(b.dataset.p);render();window.scrollTo(0,0)});
  };
  setTimeout(()=>{const el=$('#catFilter');if(el)el.oninput=()=>{page=1;render()};render()},0);
  return `${breadcrumbs([{label:title(kind)}])}<h1>${esc(title(kind))}</h1><p class="lead">${items.length.toLocaleString()} indexed records.</p><div class="filters"><input id="catFilter" placeholder="Filter this category…"></div><div id="catResults" class="grid"></div><div id="pager" class="pager"></div>`;
}
function markdownToHtml(md){
  let src=esc(String(md||'')).replace(/\r/g,'');
  const blocks=[];
  src=src.replace(/```([\s\S]*?)```/g,(m,code)=>{blocks.push(`<pre class="code md-code">${code.trim()}</pre>`);return `\n@@BLOCK${blocks.length-1}@@\n`;});
  src=src.replace(/^###### (.*)$/gm,'<h6>$1</h6>')
    .replace(/^##### (.*)$/gm,'<h5>$1</h5>')
    .replace(/^#### (.*)$/gm,'<h4>$1</h4>')
    .replace(/^### (.*)$/gm,'<h3>$1</h3>')
    .replace(/^## (.*)$/gm,'<h2>$1</h2>')
    .replace(/^# (.*)$/gm,'<h1>$1</h1>');
  src=src.replace(/^[-*] (.*)$/gm,'<li>$1</li>');
  src=src.replace(/(<li>.*<\/li>)(?=\s*<li>)/g,'$1');
  src=src.replace(/(<li>[\s\S]*?<\/li>)(?:\s*)(?=<h|$)/g,'<ul class="md-list">$1</ul>');
  src=src.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>');
  src=src.split(/\n{2,}/).map(p=>{
    const t=p.trim();
    if(!t)return '';
    if(/^<(h[1-6]|ul|pre)/.test(t)||/^@@BLOCK\d+@@$/.test(t))return t;
    return `<p>${t.replace(/\n/g,'<br>')}</p>`;
  }).join('');
  src=src.replace(/@@BLOCK(\d+)@@/g,(_,i)=>blocks[Number(i)]||'');
  return src;
}
function docsCards(){
  const docs=Object.entries(window.PELIPPER_DOCS||{}).map(([name,text])=>({name,text,slug:slug(name.replace(/\.md$/i,''))}));
  if(!docs.length)return '';
  return `<section class="section"><div class="section-heading"><div><h2>Mod Documentation</h2><p class="muted">Guides and reference documents included in the Pelipper Town <code>docs</code> folder.</p></div><span class="pill">${docs.length} documents</span></div><div class="grid docs-grid">${docs.map(d=>`<a class="card doc-card" href="#/documentation/${encodeURIComponent(d.slug)}"><div class="doc-icon">MD</div><div class="card-title">${esc(d.name.replace(/\.md$/i,''))}</div><div class="card-meta">${d.name}</div><div class="card-desc">Open this document from the mod's docs folder.</div></a>`).join('')}</div></section>`;
}
function documentationDoc(slugValue){
  const docs=window.PELIPPER_DOCS||{};
  const entry=Object.entries(docs).find(([name])=>slug(name.replace(/\.md$/i,''))===slugValue);
  if(!entry)return `<div class="empty"><h2>Document not found</h2><a href="#/documentation">Back to Documentation</a></div>`;
  const [name,text]=entry;
  return `${breadcrumbs([{label:'Documentation',href:'#/documentation'},{label:name}])}<article><div class="doc-page-head"><div><h1>${esc(name.replace(/\.md$/i,''))}</h1><p class="lead">Source document from <code>docs/${esc(name)}</code>.</p></div><a class="pill link" href="docs/${encodeURIComponent(name)}" target="_blank" rel="noopener">Open raw .md</a></div><div class="markdown-body">${markdownToHtml(text)}</div></article>`;
}
function documentation(){
  const md=window.PELIPPER_README;
  const txt=md?String(md):`The README is included in the project as README.md.`;
  // Basic Markdown rendering for the supplied README; source text remains available below.
  let h=esc(txt);
  h=h.replace(/^###### (.*)$/gm,'<h6>$1</h6>').replace(/^##### (.*)$/gm,'<h5>$1</h5>').replace(/^#### (.*)$/gm,'<h4>$1</h4>').replace(/^### (.*)$/gm,'<h3>$1</h3>').replace(/^## (.*)$/gm,'<h2>$1</h2>').replace(/^# (.*)$/gm,'<h1>$1</h1>');
  h=h.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>');
  h=h.split(/\n{2,}/).map(p=>p.trim().startsWith('<h')?p:`<p>${p.replace(/\n/g,'<br>')}</p>`).join('');
  return `${breadcrumbs([{label:'Documentation'}])}<article><h1>Documentation</h1><div class="notice warning">This page reproduces the supplied README as documentation for interpreting the dataset. It is not supplemented with external claims.</div>${docsCards()}<section class="section"><h2>Dataset README</h2>${h}</section></article>`;
}
function sources(){
  const paths=Object.keys(DATA).sort();
  return `${breadcrumbs([{label:'Sources'}])}<h1>Source datasets</h1><p class="lead">The following JSON datasets were supplied with the mod package and are indexed by this wiki.</p><ul class="source-list">${paths.map(p=>`<li><span class="pill">${esc(p)}</span></li>`).join('')}</ul>`;
}
function route(){
  const hash=location.hash||'#/';
  const m=hash.match(/^#\/wiki\/([^/]+)\/(.+)$/);
  const c=hash.match(/^#\/category\/([^/]+)$/);
  let html;
  if(m) html=renderEntity(m[1],decodeURIComponent(m[2]));
  else if(c) html=listCategory(c[1]);
  else if(hash==='#/documentation') html=documentation();
  else if(hash.startsWith('#/documentation/')) html=documentationDoc(decodeURIComponent(hash.slice('#/documentation/'.length)));
  else if(hash==='#/sources') html=sources();
  else html=home();
  $('#content').innerHTML=html; $('#content').focus();
  document.querySelectorAll('.nav-link').forEach(a=>{const hrefValue=a.getAttribute('href'); const active=hrefValue===hash || (hrefValue==='#/documentation' && hash.startsWith('#/documentation')); a.classList.toggle('active',active);});
  $('#sidebar').classList.remove('open');
}
function buildNav(){
  $('#nav').innerHTML=`<div class="nav-title">Wiki</div><a class="nav-link" href="#/">Home</a><a class="nav-link" href="#/documentation">Documentation</a><a class="nav-link" href="#/sources">Source datasets</a><div class="nav-title">Browse</div>${[['species','Pokémon'],['trainer','Trainers'],['companion','Villager Companions'],['form','Forms & Evolutions']].map(x=>`<a class="nav-link" href="#/category/${x[0]}">${x[1]}</a>`).join('')}`;
}
function doSearch(q){
  const box=$('#searchResults'); q=q.trim().toLowerCase();
  if(!q){box.hidden=true;return}
  const hits=SEARCH.filter(x=>(x.name+' '+x.id+' '+x.meta+' '+x.desc).toLowerCase().includes(q)).slice(0,30);
  box.innerHTML=hits.length?hits.map(x=>`<a class="result" href="${href(x.kind,x.id)}"><strong>${esc(x.name)}</strong><span>${esc(x.meta)} · ${esc(x.id)}</span></a>`).join(''):`<div class="result"><strong>No results</strong><span>Try a name, ID or category.</span></div>`;
  box.hidden=false;
}
$('#search').addEventListener('input',e=>doSearch(e.target.value));
$('#search').addEventListener('keydown',e=>{if(e.key==='Escape'){e.target.value='';doSearch('')}});
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))$('#searchResults').hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();$('#search').focus()}});
$('#themeBtn').onclick=()=>{document.documentElement.classList.toggle('dark');localStorage.setItem('ptwiki-theme',document.documentElement.classList.contains('dark')?'dark':'light')};
if(localStorage.getItem('ptwiki-theme')==='dark')document.documentElement.classList.add('dark');
$('#menuBtn').onclick=()=>$('#sidebar').classList.toggle('open');
window.addEventListener('hashchange',route);
buildNav();route();
})();
