# Test de Caras

{
    _id,
    creador_id,
    fecha,
    datos_personales: {
        nombre,
        apellido,
        edad,
        sexo
    },
    datos_institucionales {
        escuela,
        grado
    }
    datos_test {
        baremo_nac,
        aciertos: {
            total,
            eneatipo,
            percentil
        },...
        diagnostico: {
            subtipo,
            tipo_respuesta,
            rendimiento,
            control_de_impulsividad,
            completo
        }
    }
}