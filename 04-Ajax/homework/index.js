var URL = 'http://localhost:5000/amigos';

let showFriends = function () {
    $('#lista').empty();
    $.get(`${URL}`, function (friends) {
        friends.forEach(e => {
            $('#lista').append(`<li id ='${e.id}'>${e.name}X<li/>`);
        });
    })
}

$('#boton').click(showFriends);

$('#search').click(function () {
    let id = $('#input').val();
    if (id) {
        $.get(`${URL}/${id}`, function (friend) {
            $('#amigo').text(`Nombre: ${friend.name}, Edad: ${friend.age}, Email: ${friend.email}`);
        })
    }
});

let deleteFriend = function () {
    let id = $('#inputDelete').val();
    if (id) {
        $.ajax({
            url: `${URL}/${id}`,
            type: 'DELETE',
            success: function () {
                $('#success').text('Complete.');
                $('#inputDelete').val("");
                showFriends();
            }
        })
    }
}

$('#delete').click(deleteFriend)