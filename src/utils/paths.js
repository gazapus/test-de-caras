const paths = {
    server: process.env.REACT_APP_HOST || 'http://localhost:3000/#/',
    home: '/',
    test_start: '/test/start/:group_id',
    test_form: '/test/form',
    instrucctions: '/test/instrucctions',
    test_play: '/test/play',
    signup: '/register',
    login: '/login',
    confirmation: '/confirmation/:user_id',
    profile: '/profile',
    cancel_change: '/cancel-change/:request_id',
    confirm_change: '/confirm-change/:request_id',
    group_link: '/group/getlink',
    generate_group: '/group/new',
}

export default paths;