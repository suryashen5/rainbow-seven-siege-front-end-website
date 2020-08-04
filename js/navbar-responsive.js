const getWindowWidth = () => {
    return window.innerWidth
}


const showMenuIcon = () => {
    $('.nav-menu').removeClass('nav-menu-hide');
}


const hideMenuIcon = () => {
    $('.nav-menu').addClass('nav-menu-hide');
}

const appendNavbarVertical = () => {
    const navText = $('.nav-text')
    $('.navbar-vertical').append(navText);
}

const prependNavbarSideContainer = () => {
    const navText = $('.nav-text')
    $('.navbar-side-container').prepend(navText)
}

const attachMenuIconListener = () => {
    let toggle = false

    $('#menuIcon').click(function () {
        if (!toggle) {
            removeNavbarVerticalHide()
            toggle = true
        }
        else {
            addNavbarVerticalHide()

            toggle = false
        }
    });
}

const addNavbarVerticalHide = () => {
    $('.navbar-vertical').addClass('navbar-vertical-hide')
}

const removeNavbarVerticalHide = () => {
    $('.navbar-vertical').removeClass('navbar-vertical-hide')

}

$(document).ready(function () {
    if (getWindowWidth() <= 1320) {
        showMenuIcon()
        appendNavbarVertical()
        attachMenuIconListener()
    }

    $(window).resize(function (e) {
        if (getWindowWidth() <= 1320) {
            showMenuIcon()
            appendNavbarVertical()
            attachMenuIconListener()
        }
        else {
            prependNavbarSideContainer()
            hideMenuIcon()
            $('#menuIcon').off('click')
            addNavbarVerticalHide()
        }
    });
});



