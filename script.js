fetch('./data.json')
    .then(prom => prom.json())
    .then(data => {

        let arrayAmount = [];

        for (let i=0;i<data.length;i++){
            arrayAmount[i]=parseInt(data[i].amount)
        }

        let maxAmount = Math.max(...arrayAmount);

        let arrayWidth =[];

        arrayWidth = Array.from(arrayAmount, (elemento) => elemento * 150/maxAmount);

        let daysName = document.getElementsByClassName('day-name');
        let daysAmount = document.getElementsByClassName('day-amount');

        let barsName = Array.from(document.getElementsByClassName('bar-day'));

        for(let i=0; i<data.length;i++){
            daysName[i].innerHTML = data[i].day;
            daysAmount[i].innerHTML = '$'+data[i].amount;

            barsName[i].style.height=arrayWidth[i]+'px';

            if(maxAmount == parseInt(data[i].amount)){
                idMax = barsName[i].getAttribute("id");
            }
        }

        //document.getElementById('bar-monday').style.height= arrayWidth[0]+'px';
        //document.getElementById('bar-tuesday').style.height= arrayWidth[1]+'px';
        //document.getElementById('bar-wednesday').style.height= arrayWidth[2]+'px';
        //document.getElementById('bar-thursday').style.height= arrayWidth[3]+'px';
        //document.getElementById('bar-friday').style.height= arrayWidth[4]+'px';
        //document.getElementById('bar-saturday').style.height= arrayWidth[5]+'px';
        //document.getElementById('bar-sunday').style.height= arrayWidth[6]+'px';

        document.getElementById(idMax).style.backgroundColor = 'hsl(186, 34%, 60%)' ;

        console.log(data);
        console.log(idMax);

        for(let i=0;i<barsName.length;i++){
            barsName[i].addEventListener('mouseover',(event)=>{
                let idActual = event.target.getAttribute("id");
                let idAmount = idActual+"-amount";
                document.getElementById(idAmount).style.display='flex';
                console.log(idAmount);
            });

            barsName[i].addEventListener('mouseout',(event)=>{
                let idActual = event.target.getAttribute("id");
                let idAmount = idActual+"-amount";
                document.getElementById(idAmount).style.display='none';
                console.log(idAmount);
            });
        }

    })

//let dayBars=document.getElementsByClassName('bar-day');




function presion(evt) {
    
}