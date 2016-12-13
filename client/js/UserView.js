'use strict';

function UserView (appUser) {
        var $el = $('<div class="contextMenu"></div>');
        var template = astroTpl;
        
        this.render = function () {
            $el.empty();
            $el.html(template(appUser));

            $el.mouseover(function () {
                $el.addClass('open');
            });

            $el.mouseleave(function () {
                $el.removeClass('open');
            });

            $('#left-menu').append($el);

            return this;
        }

        this.render();
   
}

var astroTpl = _.template([
    '<div class="profile-container">', 
        '<div class="user-info">',
        '<p class="name" style="color: white;"> </br> <%= shortName %> , </br>  number of issues for you is   <span class="circ">  10 </span </p>',
        '<p class="name" style="color: white; cursor: pointer;"> </br> <u> View my issues </u> </br>',
        '<img style="width: 170px; height: 150px;margin-top: 10%;" class="photo-user">',
        '<p class="name" style="color: white;"> </br> <b ><%= name %> <b> </br>',
        '<p class="name" style="color: white;"> </br> <b ><%= role %> <b> </br>',
        '<p class="name" style="color: white;"> </br> <%= birthdate %> </br>',
        '<p class="name" style="color: white; font-weight: 300; "> </br> <%= email %> </br>',
        '</div>',
    '</div>'
].join(''));

var adminTpl = _.template([
    '<button class="btn-edit" title="Edit profile"><i class="fa fa-cog fa-3x"></i></button>',
    '<div class="profile-container">', 
        '<div class="user-info">',
        '<img style="width: 170px; height: 150px;margin-top: 20%;" class="photo" src="js/img/admin.png" alt="<% print(u_fullname) %>">',
            '<p class="name"> </br> <%= u_fullname %> </br>',
                '<p style="font-size: 15px;" class="role"> ISS Database system <%= u_role %></p> <hr>',
                '<p style="font-size: 19px;"class="role"><%= u_twitter%></p>',
        '</div>',
    '</div>'
].join(''));

var watcherTpl = _.template([
    '<button class="btn-edit" title="Edit profile"><i class="fa fa-cog fa-3x"></i></button>',
    '<div class="profile-container">', 
        '<div class="user-info">',
        '<img style="width: 170px; height: 150px;margin-top: 20%;" class="photo" src="js/img/watcher.png" alt="<% print(u_fullname) %>">',
            '<p class="name"> </br> <%= u_fullname %> </br>',
                '<p style="font-size: 15px;" class="role"> ISS Watcher</p> <hr>',
                '<p style="font-size: 19px;"class="role"><%= u_twitter%></p>',
        '</div>',
    '</div>'
].join(''));