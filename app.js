(function(){
'use strict';
const DATA=window.PELIPPER_DATA||{};
const ITEM_DATA=Array.isArray(window.PELIPPER_ITEMS)?window.PELIPPER_ITEMS:[];
const itemIndex=new Map(ITEM_DATA.map(x=>[x.id,x]));
const TYPE_AFFINITIES={
  normal:{name:'Good Appetite',description:'Food restores 10% more health and energy, except full-refill items.'},
  fire:{name:'Lantern Body',description:'Casts a larger partner or mount light at night and in mines, dungeons, and caves.'},
  water:{name:'Emergency Reservoir',description:'Once daily, using a watering can below 15% capacity refills it to 50%.'},
  electric:{name:'Static Field',description:'Increases item-attraction range by 25% and casts a compact partner or mount light.'},
  grass:{name:'Verdant Harvest',description:'Single-yield crops have a 6% chance to produce one extra primary crop.'},
  ice:{name:'Cold Focus',description:'The fishing catch meter drains 12% more slowly while the fish is outside the bar.'},
  fighting:{name:'Second Wind',description:'Restores 8 Energy each whole in-game hour, up to 96 Energy per day.'},
  poison:{name:'Composter',description:'Cut weeds roll 15% for Fiber and 3% for Mixed Seeds.'},
  ground:{name:'Rich Earth',description:'Clay-producing tilling rolls 10% for extra Clay; ordinary rocks roll 3% for Stone.'},
  flying:{name:"Bird's-Eye Survey",description:'Entering an outdoor map briefly sparkles nearby forage, dig spots, panning spots, and fishing bubbles.'},
  psychic:{name:'Mind Reader',description:'Near a giftable villager, the partner emotes how they feel about your held item.'},
  bug:{name:'Pollinator',description:'Collected Bee House Honey has a 10% chance to produce an identical extra Honey.'},
  rock:{name:'Quarry Nose',description:'Ordinary rocks roll 8% for Stone; ore nodes roll 3% for their primary ore.'},
  ghost:{name:'Phase Walk',description:'After pushing for 0.25 seconds, you can pass through villagers and farm animals.'},
  dragon:{name:'Ancient Vitality',description:'Once daily, grants +25 maximum and current health and energy for the rest of the day.'},
  dark:{name:'Mischief',description:'Witnessed garbage searches lose no friendship; normal finds roll 15% for another item.'},
  steel:{name:'Ore Resonance',description:'Standard ore nodes have a 6% chance to produce one extra primary ore.'},
  fairy:{name:'Kind Aura',description:'The first daily conversation gives +2 friendship; liked or loved gifts gain 10% more.'},
  all:{name:'All Type Affinities',description:'Grants all 18 Type Affinity effects instead of only the affinity of its first listed type.'}
};
const TYPE_AFFINITY_BY_TYPE=new Map(Object.entries(TYPE_AFFINITIES));
const HABITAT_DATA=DATA['assets/data/habitat_zones.json']||{};
const SPECIES_HABITATS=HABITAT_DATA.SpeciesHabitatTags||{};
const RIDEABLE_DATA=DATA['assets/data/rideable_species.json']||{};
const RIDEABLE_SPECIES=RIDEABLE_DATA.Species||RIDEABLE_DATA.RideableSpecies||RIDEABLE_DATA||{};
const habitatSpecies=new Map();
for(const [sid,tags] of Object.entries(SPECIES_HABITATS)){
  for(const tag of (Array.isArray(tags)?tags:[])){
    if(!habitatSpecies.has(tag)) habitatSpecies.set(tag,[]);
    habitatSpecies.get(tag).push(sid);
  }
}
for(const list of habitatSpecies.values()) list.sort((a,b)=>String(a).localeCompare(String(b)));
function habitatTagsFor(x){
  const id=String(x?.Id||'');
  return Array.isArray(SPECIES_HABITATS[id])?SPECIES_HABITATS[id]:[];
}
function mountProfileFor(id){
  return RIDEABLE_SPECIES?.[id] || RIDEABLE_SPECIES?.[String(id).toLowerCase()] || null;
}
function isRideable(id){ return !!mountProfileFor(id); }
function habitatLabel(tag){ return title(tag); }
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
  for(const x of ITEM_DATA) out.push({kind:'item',id:x.id,name:x.name,meta:'Item',desc:x.description||x.effect||'',img:x.image});
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
function renderSpeciesInfo(x){
  const habitats=habitatTagsFor(x);
  const rideable=isRideable(String(x?.Id||''));
  const rows=[];
  rows.push(`<div class="kv"><dt>Mount</dt><dd>${rideable?'Yes':'No'}</dd></div>`);
  if(habitats.length) rows.push(`<div class="kv"><dt>Habitats</dt><dd>${habitats.map(tag=>`<a class="xref" href="${href('habitat',tag)}">${esc(habitatLabel(tag))}</a>`).join(' ')}</dd></div>`);
  return rows.join('');
}
function infobox(x,name,img){
  const keys=['NationalDex','Generation','Types','GenderRate','BaseSpeciesId','FormId','Tier','MarriageCandidate','Season','Rung'];
  const rows=[];
  for(const k of keys) if(x?.[k]!==undefined) { const value=k==='GenderRate'?esc(genderRateLabel(x[k])):pretty(x[k]); rows.push(`<div class="kv"><dt>${esc(k==='GenderRate'?'Gender':title(k))}</dt><dd>${value}</dd></div>`); }
  return `<aside class="infobox"><div class="infobox-title">${esc(name)}</div>${img?`<img class="infobox-img" src="${esc(img)}" alt="${esc(name)}" onerror="this.style.display='none'">`:''}${rows.join('')}${x?.Types?renderSpeciesInfo(x):''}</aside>`;
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
for(const x of ITEM_DATA) if(!genericRefs.has(x.id)) genericRefs.set(x.id,{kind:'item',id:x.id,x});
function refName(ref){
  const x=ref?.x||{};
  return x.DisplayName||x.Name||x.NpcName||x.Presentation?.DisplayName||title(ref?.id||'');
}
function refLink(id){
  const ref=genericRefs.get(id);
  if(!ref) return `<span class="pill">${esc(id)}</span>`;
  const name=refName(ref);
  if(ref.kind==='species'||ref.kind==='form'||ref.kind==='trainer'||ref.kind==='companion'||ref.kind==='move'||ref.kind==='ability'||ref.kind==='item') return `<a class="xref" href="${href(ref.kind,ref.id)}">${esc(name)} <small>${esc(ref.id)}</small></a>`;
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
function typeAffinityKeysFor(x){
  const id=String(x?.Id||'').toLowerCase();
  const abilityIds=abilityIdsFor(x);
  const hasProtean=abilityIds.some(a=>String(a).toLowerCase()==='protean') || id==='mew';
  const isArceus=id==='arceus';
  if(hasProtean || isArceus) return ['all'];
  const types=Array.isArray(x?.Types)?x.Types:[];
  if(types.length){
    const first=String(types[0]).toLowerCase();
    const normalized=first.replace(/[^a-z]/g,'');
    if(normalized==='normal' && types.some(t=>String(t).toLowerCase()==='flying')) return ['flying'];
    if(TYPE_AFFINITY_BY_TYPE.has(normalized)) return [normalized];
  }
  return [];
}
function renderTypeAffinities(x){
  const keys=typeAffinityKeysFor(x); if(!keys.length)return '';
  const cards=keys.map(key=>{
    const a=TYPE_AFFINITY_BY_TYPE.get(key); if(!a)return '';
    return `<article class="ability-card affinity-card"><div class="ability-head"><h3>${esc(a.name)}</h3><span class="pill">${esc(key==='all'?'All Types':title(key))}</span></div><p>${esc(a.description)}</p></article>`;
  }).join('');
  return cards?`<section class="section affinities-section"><div class="section-heading"><div><h2>Type Affinity</h2><p class="muted">The Type Affinity granted by this Pokémon while it is deployed and conscious.</p></div></div><div class="ability-grid">${cards}</div></section>`:'';
}
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
  return `<div class="move-row"><span class="level-badge">${esc(level===undefined||level===''?'—':(level==='Default'?'Default':`Lv. ${level}`))}</span><a class="move-name" href="${href('move',id)}">${esc(name)}</a><div class="move-highlight-fields">${highlighted||'<span class="muted">—</span>'}</div><div class="move-inline-fields">${compact}</div></div>`;
}
function renderMoveCard(id,level){
  const m=moveFor(id); if(!m) return '';
  const name=m.DisplayName||title(id);
  const fields=moveFields(m).filter(f=>f.key!=='EffectId');
  return `<article class="move-card"><div class="move-head"><div><h3>${esc(name)}</h3><span class="pill">${esc(id)}</span></div>${level!==undefined?`<span class="level-badge">${esc(level==='Default'?'Default':`Lv. ${level}`)}</span>`:''}</div>${m.Description?`<p class="move-description">${esc(m.Description)}</p>`:''}<dl class="move-stats">${fields.map(f=>`<div><dt>${esc(f.label)}</dt><dd class="move-value${/JSON/.test(f.value)?' move-json':''}">${esc(f.value)}</dd></div>`).join('')}</dl></article>`;
}
function renderBaseStats(x){
  const stats=x?.BaseStats;
  if(!stats || typeof stats!=='object' || Array.isArray(stats)) return '';
  const order=[['Health','HP'],['Attack','Attack'],['Defense','Defense'],['SpecialAttack','Sp. Atk'],['SpecialDefense','Sp. Def'],['Speed','Speed']];
  const entries=order.map(([key,label])=>[label,Number(stats[key])]).filter(([,value])=>Number.isFinite(value));
  if(!entries.length)return '';
  const max=Math.max(...entries.map(([,value])=>value),1);
  const total=entries.reduce((sum,[,value])=>sum+value,0);
  const bars=entries.map(([label,value])=>`<div class="base-stat-row"><div class="base-stat-label"><span>${esc(label)}</span><strong>${esc(value)}</strong></div><div class="base-stat-track" role="progressbar" aria-label="${esc(label)} base stat" aria-valuemin="0" aria-valuemax="${esc(max)}" aria-valuenow="${esc(value)}"><span class="base-stat-fill" style="width:${Math.max(0,Math.min(100,(value/max)*100))}%"></span></div></div>`).join('');
  return `<section class="section base-stats-section"><div class="section-heading"><div><h2>Base Stats</h2><p class="muted">Base Stats recorded for this Pokémon in the supplied mod data.</p></div><span class="pill">Total ${total}</span></div><div class="base-stats-chart">${bars}</div></section>`;
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
const skillUnlocksByLevel={Training:new Map(),Battling:new Map(),Breeding:new Map()};
for(const item of ITEM_DATA){
  const src=String(item.source||'');
  for(const skill of Object.keys(skillUnlocksByLevel)){
    const m=src.match(new RegExp('\\b'+skill+'\\s+(\\d+)\\b','i'));
    if(m){const level=Number(m[1]); if(!skillUnlocksByLevel[skill].has(level)) skillUnlocksByLevel[skill].set(level,[]); skillUnlocksByLevel[skill].get(level).push(item.name);}
  }
}
// Additional level unlocks explicitly tabulated in the supplied Player Guide.
const documentedSlateUnlocks={1:['Stone Slate','Grass Plate'],2:['Electric Plate'],3:['Flame Slate','Earth Slate'],4:['Water Plate','Fist Slate'],5:['Sky Slate','Iron Slate'],6:['Icicle Slate','Psychic Plate'],7:['Insect Slate','Ghost Plate'],8:['Dark Plate','Fairy Plate'],9:['Draco Slate'],10:['Toxic Slate']};
for(const [level,names] of Object.entries(documentedSlateUnlocks)){
  const n=Number(level); if(!skillUnlocksByLevel.Training.has(n)) skillUnlocksByLevel.Training.set(n,[]);
  skillUnlocksByLevel.Training.get(n).push(...names);
}
function skillLevelRows(skill){
  const map=skillUnlocksByLevel[skill];
  return [...map.entries()].sort((a,b)=>a[0]-b[0]).map(([level,names])=>`<tr><th>Level ${level}</th><td>${[...new Set(names)].map(n=>`<a class="xref" href="${itemIndex.has(slug(n))?href('item',slug(n)):'#/category/item'}">${esc(n)}</a>`).join(', ')}</td></tr>`).join('');
}
function renderBattlingProfessionTree(){
  return `<div class="skill-tree"><div class="skill-tree-level"><span>Level 5</span><div class="skill-tree-branches"><article class="skill-branch"><h3>Ace Trainer</h3><p>Active Pokémon gain 25% more battle XP.</p><div class="skill-tree-level"><span>Level 10</span><div class="skill-tree-branches"><article class="skill-branch"><h4>Champion</h4><p>The party-share baseline rises from 20% to 40% before level bonuses.</p></article><article class="skill-branch"><h4>Power Trainer</h4><p>Damaging moves deal 15% more damage.</p></article></div></div></article><article class="skill-branch"><h3>Tactician</h3><p>Super-effective moves deal 10% more damage.</p><div class="skill-tree-level"><span>Level 10</span><div class="skill-tree-branches"><article class="skill-branch"><h4>Specialist</h4><p>Moves matching one of the user's types deal another 10% damage.</p></article><article class="skill-branch"><h4>Survivor</h4><p>Owned Pokémon take 20% less damage from opposing Pokémon attacks.</p></article></div></div></article></div></div></div>`;
}
function skillCard(name,xp,notes,levels,professionHtml){
  return `<section class="section skill-section"><div class="section-heading"><div><h2>${esc(name)}</h2><p class="muted">${esc(notes)}</p></div><span class="pill">10 levels</span></div><div class="skill-xp"><h3>How to gain XP</h3><p>${xp}</p></div><h3>Documented level unlocks</h3>${levels?`<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Level</th><th>Unlocks</th></tr></thead><tbody>${levels}</tbody></table></div>`:'<div class="notice">No level-by-level unlock details were present in the supplied mod documentation.</div>'}${professionHtml?`<h3>Professions</h3>${professionHtml}`:''}</section>`;
}
function skillsPage(){
  const training=skillLevelRows('Training'), breeding=skillLevelRows('Breeding');
  const battlingLevels=`<tr><th>Level 1</th><td>Antidote and VS Seeker recipes</td></tr><tr><th>Level 2</th><td>Ether recipe</td></tr><tr><th>Level 3</th><td><strong>Trophy Hunter</strong>: 30% of victories salvage a crafting material, rising 4% per level to 58% at level 10; half of those drops are doubled</td></tr><tr><th>Level 4</th><td>Super Potion recipe</td></tr><tr><th>Level 5</th><td>Ace Trainer or Tactician profession; King's Rock recipe</td></tr><tr><th>Level 6</th><td>Full Heal and Metal Coat recipes</td></tr><tr><th>Level 7</th><td>Revive and Up-Grade recipes</td></tr><tr><th>Level 8</th><td><strong>Day Care Rotation</strong>; Razor Claw, Electirizer, and Protector recipes</td></tr><tr><th>Level 9</th><td>Max Ether recipe</td></tr><tr><th>Level 10</th><td>Branch-specific final profession; <strong>Rally</strong></td></tr>`;
  return `${breadcrumbs([{label:'Skills & Professions'}])}<article><h1>Skills & Professions</h1><p class="lead">Training, Battling, and Breeding are separate ten-level SpaceCore skills for the farmer. This page uses only progression information explicitly present in the supplied Pelipper Town documentation.</p>${skillCard('Training','First sightings and catches, chores, affection, and evolution.','Training advances mainly through discovery, catching, affection, evolution, and a limited amount of daily chore credit.',training,'')} ${skillCard('Battling','Whenever an owned Pokémon is credited with a victory: 8 XP plus one per five defeated levels, capped at 20. The first credited victory against each wild species adds 15 XP.','Battling XP comes from credited victories; damage, attacks attempted, changing moves, and party-share XP do not grant Battling skill XP.',battlingLevels,renderBattlingProfessionTree())} ${skillCard('Breeding','Producing and hatching Eggs.','Breeding advances through pair and Egg progression.',breeding,'')}<div class="notice">Profession names and effects for Training and Breeding were not present in the supplied documentation, so they are not inferred or added here.</div></article>`;
}
function abilitiesPage(){
  const abilities=[...abilityIndex.entries()].map(([id,x])=>({id,name:x.DisplayName||title(id),desc:x.Description||'',users:abilityUsers.get(id)||[]}));
  abilities.sort((a,b)=>a.name.localeCompare(b.name)||a.id.localeCompare(b.id));
  const cards=abilities.map(a=>`<article class="ability-card"><div class="ability-head"><h3><a href="${href('ability',a.id)}">${esc(a.name)}</a></h3><span class="pill">${a.users.length} Pokémon</span></div>${a.desc?`<p>${esc(a.desc)}</p>`:''}<div class="ability-users">${a.users.slice(0,12).map(u=>`<a class="xref" href="${href('species',u.id)}">${esc(u.name)}</a>`).join(' ')}${a.users.length>12?`<span class="muted">+${a.users.length-12} more</span>`:''}</div></article>`).join('');
  return `${breadcrumbs([{label:'Abilities'}])}<article><div class="section-heading"><div><h1>Abilities</h1><p class="lead">Passive abilities recorded in the supplied Pelipper Town data, with links to their Pokémon users and individual ability pages.</p></div><span class="pill">${abilities.length} abilities</span></div><div class="ability-grid">${cards}</div></article>`;
}
function habitatsPage(){
  const habitats=[...habitatSpecies.entries()].map(([tag,ids])=>({tag,name:habitatLabel(tag),count:ids.length})).sort((a,b)=>a.name.localeCompare(b.name));
  return `${breadcrumbs([{label:'Habitats'}])}<article><div class="section-heading"><div><h1>Habitats</h1><p class="lead">Habitat tags assigned to Pokémon in the supplied habitat dataset. Open a habitat to see its associated species.</p></div><span class="pill">${habitats.length} habitats</span></div><div class="grid habitat-grid">${habitats.map(h=>`<a class="card" href="${href('habitat',h.tag)}"><div class="card-title">${esc(h.name)}</div><div class="card-meta">${h.count} Pokémon</div></a>`).join('')}</div></article>`;
}
function habitatEntity(tag){
  const ids=habitatSpecies.get(tag)||[];
  const cards=ids.map(id=>{const x=species.get(id); if(!x)return ''; const name=firstDisplay(x); const img=imageFor(x); return `<a class="card item-card" href="${href('species',id)}">${img?`<img src="${esc(img)}" alt="" class="item-card-img" onerror="this.style.display='none'">`:''}<div class="card-title">${esc(name)}</div><div class="card-meta">${esc(id)}</div>${Array.isArray(x.Types)?`<div class="card-tags">${x.Types.map(t=>`<span class="pill">${esc(t)}</span>`).join('')}</div>`:''}</a>`;}).join('');
  return `${breadcrumbs([{label:'Habitats',href:'#/category/habitat'},{label:habitatLabel(tag)}])}<article><h1>${esc(habitatLabel(tag))}</h1><p class="lead">Pokémon assigned to the <strong>${esc(habitatLabel(tag))}</strong> habitat tag in the supplied mod data.</p><div class="section"><div class="section-heading"><h2>Pokémon</h2><span class="pill">${ids.length}</span></div><div class="grid">${cards||'<div class="empty">No Pokémon are associated with this habitat.</div>'}</div></div></article>`;
}
function renderEntity(kind,id){
  if(kind==='habitat') return habitatEntity(id);
  const map={species,trainer:trainers,companion:companions,form:forms,move:moveIndex,ability:abilityIndex,item:itemIndex}[kind], x=map?.get(id);
  if(!x)return `<div class="empty"><h2>Entity not found</h2><p>The requested identifier is not present in the supplied data.</p><a href="#/">Return to home</a></div>`;
  const name=firstDisplay(x), img=kind==='item'?x.image:imageFor(x), intro=kind==='item'?'Item from the Pelipper Town expansion.':(x.Description||x.description||'');
  let body=`${breadcrumbs([{label:title(kind)},{label:name}])}<div class="entity-head"><div><h1>${esc(name)}</h1><p class="lead">${esc(intro)}</p></div>${infobox(x,name,img)}</div>`;
  if(kind==='species'){
    body+=renderJobs(x)+renderAbilities(x)+renderTypeAffinities(x)+renderLearnset(x)+renderEvolutionSection(id)+renderMegaEvolutionSection(id)+renderBaseStats(x)+`<div class="section"><h2>Information</h2>${renderImportant(x)}</div>`;
  } else if(kind!=='item') {
    body+=`<div class="section"><h2>Information</h2>${renderImportant(x)}</div>`;
  }
  if(kind==='move'){ body+=`<section class="section"><h2>Move data</h2>${renderMoveCard(id,'')}</section>`; }
  if(kind==='item'){
    const recipe=x.recipe;
    body+=`<section class="section item-detail-section"><div class="item-detail-grid"><div><h2>Description</h2><p class="lead item-description">${esc(x.description||x.effect||'No description is present in the supplied localization data.')}</p>${x.effect&&x.description&&x.effect!==x.description?`<h3>Effect</h3><p>${esc(x.effect)}</p>`:''}</div><aside class="item-detail-side">${x.source?`<div><b>How to obtain</b><p>${esc(x.source)}</p></div>`:''}${x.gift?`<div><b>Gift</b><p>${esc(x.gift)}</p></div>`:''}</aside></div></section>`;
    if(recipe) body+=`<section class="section"><div class="section-heading"><div><h2>Recipe</h2><p class="muted">Recipe information explicitly documented by the supplied mod guide.</p></div></div><div class="recipe-card">${recipe.unlock?`<div><b>Unlock / source</b><p>${esc(recipe.unlock)}</p></div>`:''}${recipe.ingredients?`<div><b>Ingredients</b><p class="recipe-ingredients">${esc(recipe.ingredients)}</p></div>`:''}${recipe.note?`<div><b>Notes</b><p>${esc(recipe.note)}</p></div>`:''}</div></section>`;
    body+=`<section class="section"><h2>Item data</h2><div class="code">${esc(JSON.stringify(x,null,2))}</div></section>`;
  }
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
    ['item','Items',ITEM_DATA.length,'Items from the expansion, with descriptions, documented acquisition methods and recipes.'],
    ['skills','Skills & Professions',3,'Training, Battling, and Breeding progression, XP sources, documented unlocks and professions.'],
    ['ability','Abilities',abilityIndex.size,'Explore Pokémon passive abilities and the Pokémon that share them.'],
    ['habitat','Habitats',habitatSpecies.size,'Browse habitat tags and the Pokémon associated with each habitat.'],
  ];
  return cats.map(c=>`<a class="card" href="#/category/${c[0]}"><div class="card-title">${c[1]}</div><div class="card-meta">${c[2].toLocaleString()} records</div><div class="card-desc">${c[3]}</div></a>`).join('');
}
function home(){
  const totalRefs=[...new Set([...records.flatMap(r=>r.path)])].length;
  return `<div class="hero">${breadcrumbs([])}<h1>Pelipper Town Wiki</h1><p class="lead">A data-driven reference built from the supplied Pelipper Town README and JSON datasets. The interface exposes structured records, cross-references and source data without inventing missing content.</p><div class="stats"><div class="stat"><b>${species.size.toLocaleString()}</b><span>Pokémon indexed</span></div><div class="stat"><b>${trainers.size}</b><span>trainer records</span></div><div class="stat"><b>${companions.size}</b><span>villager records</span></div><div class="stat"><b>${Object.keys(DATA).length}</b><span>JSON datasets</span></div></div></div>
  <h2>Browse the Wiki</h2><div class="grid">${categoryCards()}</div>
  <h2>Data sources</h2><div class="notice">The wiki indexes the supplied JSON files and preserves source values. The original mod README is available under <a href="#/documentation">Documentation</a>.</div>`;
}
function listCategory(kind){
  if(kind==='skills') return skillsPage();
  if(kind==='ability') return abilitiesPage();
  if(kind==='habitat') return habitatsPage();
  const map={species,trainer:trainers,companion:companions,form:forms,item:itemIndex}[kind];
  if(!map)return `<div class="empty">Unknown category.</div>`;
  const items=[...map.entries()].map(([id,x])=>({
    id,
    name:kind==='item'?x.name:firstDisplay(x),
    desc:kind==='item'?(x.description||x.effect||''):x.Description||x.description||'',
    img:kind==='item'?x.image:imageFor(x),
    category:kind==='item'?(x.category||'Other'):'',
    types:kind==='species'?(Array.isArray(x.Types)?x.Types:[]):[],
    jobs:kind==='species'?(Array.isArray(x.Jobs)?x.Jobs.map(v=>String(v)):[]):[],
    mount:kind==='species'?isRideable(String(id)):false
  }));
  items.sort((a,b)=>a.name.localeCompare(b.name));
  const typeOptions=kind==='species'?[...new Set(items.flatMap(x=>x.types.map(t=>String(t))))].sort((a,b)=>a.localeCompare(b)):[];
  const jobOptions=kind==='species'?[...new Set(items.flatMap(x=>x.jobs))].sort((a,b)=>title(a).localeCompare(title(b))):[];
  let page=1; const size=60;
  const render=()=>{
    const q=($('#catFilter')?.value||'').toLowerCase();
    const type=($('#typeFilter')?.value||'').toLowerCase();
    const job=($('#jobFilter')?.value||'').toLowerCase();
    const mount=($('#mountFilter')?.value||'').toLowerCase();
    const filtered=items.filter(x=>{
      const textMatch=(x.name+' '+x.id+' '+x.desc).toLowerCase().includes(q);
      const typeMatch=!type || x.types.some(t=>String(t).toLowerCase()===type);
      const jobMatch=!job || x.jobs.some(j=>String(j).toLowerCase()===job);
      const mountMatch=!mount || (mount==='yes' ? x.mount : !x.mount);
      return textMatch&&typeMatch&&jobMatch&&mountMatch;
    });
    const pages=Math.max(1,Math.ceil(filtered.length/size)); page=Math.min(page,pages);
    const slice=filtered.slice((page-1)*size,page*size);
    const cards=slice.map(x=>`<a class="card item-card" href="${href(kind,x.id)}">${x.img?`<img src="${esc(x.img)}" alt="" class="item-card-img" onerror="this.style.display='none'">`:''}<div class="card-title">${esc(x.name)}</div><div class="card-meta">${esc(x.id)}${x.category?` · ${esc(x.category)}`:''}</div>${kind==='species'&&x.types.length?`<div class="card-tags">${x.types.map(t=>`<span class="pill">${esc(t)}</span>`).join('')}</div>`:''}<div class="card-desc">${esc(x.desc)}</div></a>`).join('');
    $('#catResults').innerHTML=cards||'<div class="empty">No matching records.</div>';
    $('#catCount').textContent=`${filtered.length.toLocaleString()} matching records`;
    $('#pager').innerHTML=`<button ${page<=1?'disabled':''} data-p="-1">Previous</button><span class="pill">Page ${page} of ${pages}</span><button ${page>=pages?'disabled':''} data-p="1">Next</button>`;
    $('#pager').querySelectorAll('button').forEach(b=>b.onclick=()=>{page+=Number(b.dataset.p);render();window.scrollTo(0,0)});
  };
  setTimeout(()=>{
    const el=$('#catFilter'), typeEl=$('#typeFilter'), jobEl=$('#jobFilter'), mountEl=$('#mountFilter');
    [el,typeEl,jobEl,mountEl].filter(Boolean).forEach(control=>control.oninput=control.onchange=()=>{page=1;render()});
    render();
  },0);
  const speciesFilters=kind==='species'?`<select id="typeFilter" aria-label="Filter by type"><option value="">All types</option>${typeOptions.map(t=>`<option value="${esc(t)}">${esc(t)}</option>`).join('')}</select><select id="jobFilter" aria-label="Filter by job"><option value="">All jobs</option>${jobOptions.map(j=>`<option value="${esc(j)}">${esc(title(j))}</option>`).join('')}</select><select id="mountFilter" aria-label="Filter by mount"><option value="">All mounts</option><option value="yes">Mountable</option><option value="no">Not mountable</option></select>`:'';
  return `${breadcrumbs([{label:kind==='item'?'Items':title(kind)}])}<h1>${esc(kind==='item'?'Items':title(kind))}</h1><p class="lead">${items.length.toLocaleString()} indexed records.</p><div class="filters"><input id="catFilter" placeholder="Filter this category…">${speciesFilters}</div><div class="category-result-meta"><span id="catCount">${items.length.toLocaleString()} matching records</span></div><div id="catResults" class="grid"></div><div id="pager" class="pager"></div>`;
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
  const txt=md?String(md):`The supplied mod README is included in the project as MOD_README.md.`;
  // Basic Markdown rendering for the supplied README; source text remains available below.
  let h=esc(txt);
  h=h.replace(/^###### (.*)$/gm,'<h6>$1</h6>').replace(/^##### (.*)$/gm,'<h5>$1</h5>').replace(/^#### (.*)$/gm,'<h4>$1</h4>').replace(/^### (.*)$/gm,'<h3>$1</h3>').replace(/^## (.*)$/gm,'<h2>$1</h2>').replace(/^# (.*)$/gm,'<h1>$1</h1>');
  h=h.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>');
  h=h.split(/\n{2,}/).map(p=>p.trim().startsWith('<h')?p:`<p>${p.replace(/\n/g,'<br>')}</p>`).join('');
  return `${breadcrumbs([{label:'Documentation'}])}<article><h1>Documentation</h1><div class="notice warning">This page reproduces the supplied README as documentation for interpreting the dataset. It is not supplemented with external claims.</div>${docsCards()}<section class="section"><h2>Dataset README</h2>${h}</section></article>`;
}
function thirdPartyNotices(){
  return `${breadcrumbs([{label:'Third-party notices'}])}<article><h1>Third-party notices</h1><p class="lead">Credits, source links, license notes, and redistribution notices carried over from the supplied Pelipper Town mod package. This Wiki is an unofficial reference project and does not claim ownership of third-party artwork.</p><div class="notice warning">The Wiki bundles copies of assets extracted from the supplied mod package. Their original third-party terms and attribution remain applicable; this page does not grant additional rights.</div><div class="section"><p><a class="pill link" href="THIRD_PARTY_NOTICES.md" target="_blank" rel="noopener">Open raw THIRD_PARTY_NOTICES.md</a></p></div><div class="section"><h2>Included notice</h2><pre class="code md-code">${esc(window.PELIPPER_THIRD_PARTY_NOTICES||'')}</pre></div></article>`;
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
  else if(hash==='#/notices') html=thirdPartyNotices();
  else html=home();
  $('#content').innerHTML=html; $('#content').focus();
  document.querySelectorAll('.nav-link').forEach(a=>{const hrefValue=a.getAttribute('href'); const active=hrefValue===hash || (hrefValue==='#/documentation' && hash.startsWith('#/documentation')) || (hrefValue==='#/category/habitat' && hash.startsWith('#/wiki/habitat/')) || (hrefValue==='#/category/ability' && hash.startsWith('#/wiki/ability/')); a.classList.toggle('active',active);});
  $('#sidebar').classList.remove('open');
}
function buildNav(){
  $('#nav').innerHTML=`<div class="nav-title">Wiki</div><a class="nav-link" href="#/">Home</a><a class="nav-link" href="#/documentation">Documentation</a><a class="nav-link" href="#/sources">Source datasets</a><a class="nav-link" href="#/notices">Third-party notices</a><div class="nav-title">Browse</div>${[['species','Pokémon'],['trainer','Trainers'],['companion','Villager Companions'],['form','Forms & Evolutions'],['item','Items'],['ability','Abilities'],['habitat','Habitats'],['skills','Skills & Professions']].map(x=>`<a class="nav-link" href="#/category/${x[0]}">${x[1]}</a>`).join('')}`;
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
