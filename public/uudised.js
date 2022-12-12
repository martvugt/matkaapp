const uudised = [
    {
        tiitel: 'Uudis 1',
        sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aliquid nihil. Cum eaque beatae dolorem tenetur, distinctio delectus nesciunt, laboriosam aut rem quia dicta hic? Id ut pariatur saepe delectus.',
        autor: 'Mina Ise'
    },
    {
        tiitel: 'Uudis 2',
        sisu: 'See on teine uudis',
        autor: 'Mina Ise'
    },
    {
        tiitel: 'Uudis 3',
        sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aliquid nihil. Cum eaque beatae dolorem tenetur, distinctio delectus nesciunt, laboriosam aut rem quia dicta hic? Id ut pariatur saepe delectus.',
        autor: 'Keegi Teine'
    },
    {
        tiitel: 'Uudis 4',
        sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aliquid nihil. Cum eaque beatae dolorem tenetur, distinctio delectus nesciunt, laboriosam aut rem quia dicta hic? Id ut pariatur saepe delectus.',
        autor: 'Mina Ise'
    },
]

function valjastaUudis(uudis) {
    document.getElementById('sisu').innerHTML += `
    <div class="uudis-konteiner">
        <h1>${uudis.tiitel}</h1>
        <div class="autor">
            ${uudis.autor}
        </div>
        <div class="sisu">
            ${uudis.sisu}
        </div>
    </div>
   `
}

for (i=0; i<uudised.length; i++) {
    valjastaUudis(uudised[i])
}