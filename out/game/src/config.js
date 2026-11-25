export const W=1280,H=720,SHIFT=150;
export const INGREDIENTS={tomato:{name:'Tomato',color:'#e85742',chop:true},lettuce:{name:'Lettuce',color:'#65a968',chop:true},cucumber:{name:'Cucumber',color:'#75b89b',chop:true},patty:{name:'Patty',color:'#8c5036',cook:true},bun:{name:'Bun',color:'#e7ac58'},pasta:{name:'Pasta',color:'#efce76',cook:true},cheese:{name:'Cheese',color:'#f1c849'}};
export const RECIPES=[
 {name:'Tomato Pasta',items:['pasta','tomato','cheese'],color:'#e96f50'},
 {name:'Garden Salad',items:['lettuce','tomato','cucumber'],color:'#74ad6c'},
 {name:'Classic Burger',items:['bun','patty','lettuce'],color:'#dfa34e'},
 {name:'Cheese Burger',items:['bun','patty','cheese'],color:'#eab943'},
 {name:'Veggie Pasta',items:['pasta','lettuce','tomato'],color:'#79aa62'},
 {name:'Double Burger',items:['bun','patty','patty','cheese'],color:'#ca8245'}
];
export const STATIONS={board:{x:290,y:448},stove:{x:584,y:448},assembly:{x:870,y:448},window:{x:1136,y:448}};
export const CRATES=['tomato','lettuce','patty','bun','pasta','cheese','cucumber'];
