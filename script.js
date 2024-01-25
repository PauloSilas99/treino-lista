
function apagarDados(){
    $("#nome").val("")
    $("#idade").val("")
    $("#habilidade").val("")
    $(".alert").hide();
}

$(".alert").hide()
$(".dadosEdit").hide()


$(".addUser").on('click',function(){
    $(".alert").show();
})

//Add divs
$(".save").on('click',function(){
    const nome = $("#nome").val()
    const idade = $("#idade").val()
    const habilidade = $("#habilidade").val()


    $(".resultadoAdd").append(`
    <div class="newUser">
    <ul class="uLnew">
        <li>Nome: ${nome}</li>
        <li>Idade: ${idade}</li>
        <li>Habilidade: ${habilidade}</li>
        <a class="icon"><img src="img/Vector (9).svg" alt=""></a>
    </ul>
</div>
    `)
    
    $(".delete").on("click",function(){
        apagarDados()
    })
    
    apagarDados()
})

$(".delete").on("click",function(){
    apagarDados()
})

$(".limpar").on('click',function(){
    $(".txtPesq").val("")
})

//Editar dados ja preenchidos
    $(".newUser").on('click',function(){
        $(".uLnew").addClass(".telaMaior")
         $(".dadosEdit").show()
    })

// $(".txtPesq").on('input',function(){
//     var input = $(this).val()
//     if(input.includes(".resultadoAdd")){
//         $(this).show(value())
//     }else{
//         $(this).hide()
//     }
//     // $(".resultadoAdd").each(function(){
//     //     // var nome = $("#nome").val().toLowerCase()
//     //     // var idade = $("#idade").val().toLowerCase()
//     //     // var habilidade = $("#habilidade").val().toLowerCase()

//     //     // if(nome.includes(input) || idade.includes(input) || habilidade.includes(input)){
//     //     //     $(this).show()
//     //     // }
//     // })
 
// })