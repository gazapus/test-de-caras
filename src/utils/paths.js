const paths = {
    server: process.env.REACT_APP_HOST || 'http://localhost:3000/#/',
    home: '/',
    test: '/test',
    userForm: '/userform',
    instrucctions: '/instrucctions',
    test_user: '/test/user/:user_id/:group_id',
    signup: '/register',
    login: '/login',
    confirmation: '/confirmation/:user_id',
    profile: '/profile',
    cancel_change: '/cancel-change/:request_id',
    confirm_change: '/confirm-change/:request_id',
    universal_link: '/generate/universal',
}

export default paths;