const valider = document.getElementById('valider');
const affichageResultat = document.getElementById('affichageResultat');

const quarters = document.getElementById('quarter');
const dimes = document.getElementById('dimes');
const dollars = document.getElementById('dollar');
const pennies = document.getElementById('pennies');
const nickels = document.getElementById('nickels');

valider.addEventListener('click', Conversion )

document.addEventListener('keydown', function(event) 
{
   if(event.key==="Enter")
   {
      Conversion();
   }
 
})



function Conversion()
{
    const valeur = document.getElementById('valeur').value;
    dollars.textContent = `${valeur}`
    
    affichageResultat.classList.remove('none');

    if(valeur === '')
     {
        alert('Aucune valeur entrée!');
        affichageResultat.innerHTML = '<p style="color: red;">Attention, aucun valeur n\'a été renseigné! </p>';
     }
     else
     {
        let cent = Math.round(valeur*100);
        let  quarter = Math.round(cent / 25);

        let reste1= cent%25;
        let dime = Math.round(reste1/10);

        let reste2 = reste1%10;
        let nickel = Math.round(reste2/5);
        
        let penny = reste2%5;


        affichageResultat.textContent = `Total Centimes: ${cent} centime(s)`;

       quarters.textContent = `${quarter}`;
       dimes.textContent = `${dime}`;
       nickels.textContent = `${nickel}`;
       pennies.textContent = `${penny}`;

     }
}