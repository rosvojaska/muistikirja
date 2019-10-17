function showTab( _tab ) {
  
  // kaikki html elementit, mitkä on <section>
  var elements = Array.from(document.querySelectorAll(`section`));

  // jos elementin className on sama kun 'section--' + '_tab', nii se tulee näkyviin, muuten laitetaan piiloon
  elements.forEach((element) => {
    element.className === `section--${_tab}` ? element.style.display = 'block' : element.style.display = 'none';
  })
}

function debugConsole( color, ...args ) {
  var style0 = `background: #000; font-size:18px; color: ${color}`;
  var style1 = `background: #fff; font-size:18px; color: ${color}`;
  
  args.forEach((element, i) => {
    console.log( "%c " + element  + " ", (i % 2) ? style0 : style1);
    // section.section--${CSS.escape(String(_tab))}

    // if (i % 2 === 0) {}
  });
}