let adrese = window.location.hash
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(",")
let vards  = adrese[0]
document.querySelector('.virsraksts').innerHTML = 'Sveiks '+vards


let laukumuSaturs = ['😃','😎','🥳','😃','🥳','😎']
let atvertieLaukumi = []
let pedejieDivi = []

function veiktGajienu(laukums)
{
    let atvertsJaunsLaukums = false
    if( atvertieLaukumi.indexOf(laukums) == -1 )
    {
        atvertsJaunsLaukums = true
    }
    else
    {
        atvertsJaunsLaukums = false
    }
    
    
    if(atvertsJaunsLaukums)
    {
        document.querySelector('#'+laukums+' div').style.display="block"
        document.querySelector('#'+laukums+' div').style.opacity=1
        pedejieDivi.push(laukums)
    }

    if( pedejieDivi.length == 2 )
    {
        let atverts1 = pedejieDivi[0].replace('L','')
        let atverts2 = pedejieDivi[1].replace('L','')

        atverts1 = parseInt(atverts1,10)
        atverts2 = parseInt(atverts2,10)

        if( laukumuSaturs[atverts1] == laukumuSaturs[atverts2] )
        {
            console.log('atvērti vienādi')
            atvertieLaukumi.push( pedejieDivi[0],pedejieDivi[1] )
        }
        else
        {
            console.log('nav atvērti vienādi')
            document.querySelector('#'+pedejieDivi[0]+' div').style.opacity=0.1
            document.querySelector('#'+pedejieDivi[1]+' div').style.opacity=0.1

            let pedejieDiviCopy = pedejieDivi

            setTimeout(  function() 
            {
                document.querySelector('#'+pedejieDiviCopy[0]+' div').style.display='none'
                document.querySelector('#'+pedejieDiviCopy[1]+' div').style.display='none'

            }   , 500  )
        }


        pedejieDivi = []
    }

    

    if( laukumuSaturs.length == atvertieLaukumi.length )
    {
        alert('Apsveicam')
    }

}