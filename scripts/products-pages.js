(function(){
  const PRODUCTS = {
    'electric-motors':{
      title: 'Electric Motors',
      desc: 'High-quality electric motors suitable for various applications. Power: 0.5HP - 5HP.',
      img: 'images/electric_motor.jpg',
      variants:[
        {id:'em-0.5hp', name:'Electric Motor 0.5 HP', specs:'0.5 HP, Single Phase', price:'₹3500', img:'images/electric_motor_05.jpg'},
        {id:'em-1hp', name:'Electric Motor 1 HP', specs:'1 HP, Single Phase', price:'₹4500', img:'images/electric_motor_1.jpg'},
        {id:'em-2hp', name:'Electric Motor 2 HP', specs:'2 HP, Three Phase', price:'₹8200', img:'images/electric_motor_2.jpg'},
        {id:'em-3hp', name:'Electric Motor 3 HP', specs:'3 HP, Three Phase', price:'₹13500', img:'images/electric_motor_3.jpg'}
      ]
    },
    'submersible-pumps':{
      title:'Submersible Pumps',
      desc:'Reliable submersible pumps for clean water supply and borewell applications.',
      img:'images/submersible.jpg',
      variants:[
        {id:'sp-0.5hp', name:'Submersible Pump 0.5 HP', specs:'0.5 HP, 1440 RPM', price:'₹6000', img:'images/submersible_05.jpg'},
        {id:'sp-1hp', name:'Submersible Pump 1 HP', specs:'1 HP, 1440 RPM', price:'₹8200', img:'images/submersible_1.jpg'}
      ]
    },
    'ball-valves':{
      title:'PVC & CPVC Ball Valves',
      desc:'Durable PVC and CPVC ball valves available in various sizes for plumbing and industrial use.',
      img:'images/ball_valve.jpg',
      variants:[
        {id:'bv-1', name:'PVC Ball Valve 1 inch', specs:'1 inch, PVC', price:'₹120', img:'images/ball_valve.jpg'},
        {id:'bv-2', name:'PVC Ball Valve 2 inch', specs:'2 inch, PVC', price:'₹220', img:'images/ball_valve.jpg'}
      ]
    },
    'solvents':{
      title:'PVC & CPVC Solvents',
      desc:'Strong and reliable PVC & CPVC solvent cement for leak-proof pipe fittings.',
      img:'images/solvent.jpg',
      variants:[
        {id:'sv-100', name:'Solvent Cement 100 ml', specs:'100 ml bottle', price:'₹90', img:'images/solvent.jpg'},
        {id:'sv-500', name:'Solvent Cement 500 ml', specs:'500 ml bottle', price:'₹350', img:'images/solvent.jpg'}
      ]
    }
  };

  // DOM refs
  const productCards = document.querySelectorAll('.product-card');
  const productPage = document.getElementById('productPage');
  const backBtn = document.getElementById('backToProducts');
  const productHeaderImg = document.getElementById('productHeaderImg');
  const productHeaderTitle = document.getElementById('productHeaderTitle');
  const productHeaderDesc = document.getElementById('productHeaderDesc');
  const variantsList = document.getElementById('variantsList');

  function openProduct(key){
    const info = PRODUCTS[key];
    if(!info) return;
    // fill header
    productHeaderImg.src = info.img || 'images/logo_text.png';
    productHeaderImg.alt = info.title;
    productHeaderTitle.textContent = info.title;
    productHeaderDesc.textContent = info.desc;
    // fill variants
    variantsList.innerHTML = '';
    info.variants.forEach(v =>{
      const card = document.createElement('div');
      card.className = 'variant-card';
      card.innerHTML = `
        <img src="${v.img}" alt="${v.name}">
        <h4>${v.name}</h4>
        <div class="variant-meta">${v.specs}</div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <strong>${v.price}</strong>
          <a href="tel:+919148723271" class="variant-cta">Buy / Enquire</a>
        </div>
      `;
      variantsList.appendChild(card);
    });

    // show page
    productPage.hidden = false;
    productPage.setAttribute('aria-hidden','false');
    document.getElementById('products').scrollIntoView({behavior:'smooth'});
  }

  function closeProduct(){
    productPage.hidden = true;
    productPage.setAttribute('aria-hidden','true');
    window.scrollTo({top:0,behavior:'smooth'});
  }

  productCards.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.dataset.key;
      openProduct(key);
    });
  });
  backBtn.addEventListener('click', closeProduct);

})();
