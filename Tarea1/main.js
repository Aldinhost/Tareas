console.log('Promedio Mentores');


const mentorsArray = [
    {
      name: "Ivan Diaz",
      scores: [
        {
          signature: "HTML",
          score: 8,
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 8
        },
        {
          signature: "ReactJS",
          score: 8
        }
      ]
    },
    {
      name: "Alan Medina",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 7
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
    {
      name: "Elvira Camarillo",
      scores: [
        {
          signature: "HTML",
          score: 9
        },
        {
          signature: "CSS",
          score: 9
        },
       
        {
          signature: "ReactJS",
          score: 9
        }
      ]
    },
    {
      name: "Alejandra Paez",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
       
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
  ];



const showData = (array) => {
  const mentor = document.querySelector('#mentor');
    
    const obtenerSuma = array.map((item)=>{
        const {name,scores} = item;
        let sumatoria = scores.reduce((accum,item)=>{
          return accum + item.score;
        },0);

        return {name, sumatoria, scores};
    });


    let suma = obtenerSuma;

    for(let numero of suma){
      const tam = numero.scores.length;
      const newElement = document.createElement('li');
      mentor.appendChild(newElement).textContent += `${numero.name}: ${(numero.sumatoria / tam).toFixed(1)}`;
    }
}

console.log(showData(mentorsArray));




// const newElement = document.createElement('div');
//       mentor.appendChild(newElement).innerHTML += `<h4>${numero.name}</h4>Promedio: ${numero.sumatoria / tam}`;






