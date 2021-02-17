import AppBar from './AppBarBase';
import Logo from './Logo';
import User from './User';
import useUserLogged from '../hooks/useLoggedUser';

function TestAppBar({showItems}) {
    const userLogged = useUserLogged();

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
                            action: () => console.log("individual"),
                        },
                        {
                            name: "Test grupal",
                            action: () => console.log("grupal")
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