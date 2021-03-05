import AppBar from './AppBarBase';
import Logo from './Logo';
import User from './User';
import useUserLogged from '../hooks/useLoggedUser';
import {useHistory} from 'react-router-dom';
import pathnames from '../utils/paths';

function TestAppBar({showItems = true}) {
    const userLogged = useUserLogged();
    const history = useHistory();

    return (
        <AppBar
            logo={<Logo/>}
            items={[
                {
                    name: "Nuevo ▾",
                    icon: "file",
                    visible: showItems && userLogged,
                    subItems: [
                        {
                            name: "Test individual",
                            action: () => history.push(pathnames.group_link),
                        },
                        {
                            name: "Test grupal",
                            action: () => history.push(pathnames.generate_group)
                        },
                        {
                            name: "Cargar datos",
                            action: () => console.log("cargar datos")
                        },
                    ]
                },
                {
                    name: "Registros ▾",
                    visible: showItems && userLogged,
                    icon: "table",
                    subItems: [
                        {
                            name: "Ver",
                            action: () => console.log(" ver todos los registros"),
                        },
                        {
                            name: "Importar",
                            action: () => console.log("importar registros")
                        },
                        {
                            name: "Exportar",
                            action: () => console.log("exportar registros")
                        },
                    ]
                },
                {
                    name: "Configuracion",
                    visible: showItems && userLogged,
                    icon: "cog",
                    action: () => console.log("config here 2"),
                }
            ]}
            right={<User logged={userLogged}/>}
        />
    )
}


export default TestAppBar;