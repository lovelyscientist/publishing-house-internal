'use strict';

function UserView (appUser) {
        var $el = $('<div class="contextMenu"></div>');

        switch (appUser.u_role) {
            case 'astronaut':
            var template = astroTpl;
            break;
            case 'administrator':
            var template = adminTpl;
            break
            default:
            var template = watcherTpl;
        }
        
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
    '<button class="btn-edit" title="Edit profile"><i class="fa fa-cog fa-3x"></i></button>',
    '<div class="profile-container">', 
        '<div class="user-info">',
        '<img style="width: 170px; height: 150px;margin-top: 20%;" class="photo" src="js/img/astronaut.png" alt="<% print(u_fullname) %>">',
            '<p class="name"> </br> <%= u_fullname %> </br>',
                '<p style="font-size: 15px;" class="role"><%= u_agency%> <%= u_role %></p> <hr>',
                '<p style="font-size: 19px;"class="role"><%= u_twitter%></p>',
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