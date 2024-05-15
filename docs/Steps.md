# Estrategia proyecto StarWars

### Personajes
  - swapi.dev 
  - En Flux, en actions definimos la función que nos traiga los datos de personajes de la API
  - Los vamos a guardar en el store (no guardamos todos el objeto que está en data. Sólo hay que guardar el array(el result))
  - La función la ejecutamos en el useEffect del appContext
  - Ahora toca hacer un map() para mostrar varios datos de los personajes(no todos)
  - Tenemos que definir un par de botones:
    - El primero es el de detalles (vamos a ponerle un link que nos envíe a la ruta para ver los detalles y también en el click guardar los datos de ese item en el store(currentCharacter) para poder mostrarlo en el otro componente)
    - El segundo tenemos que trabajar con los favoritos (va a ser un array definido en el store que al pulsar el botón agregue un elemento en ese array)
  - En el componente de detalles tenemos que mostrar todos los datos del personaje. También un botón que nos devuelva al listado de personajes (ese botón tiene que estar dento del link).

### Naves
  - swapi.tech
  - En Flux, en actions definimos la función que nos traiga los datos de las naves de la API
  - Los vamos a guardar en el store (no guardamos todos el objeto que está en data. Sólo hay que guardar el array(el result))
  - La función la ejecutamos en el useEffect del appContext
  - Ahora toca hacer un map() para mostrar el nombre y la imagen de las naves.
  - Tenemos que definir un par de botones:
    - El primero es el de detalles (vamos a ponerle un link que nos envíe a otro componente y también en el click va a guardar en el store la url que contiene los detalles de la nave).
    - El segundo tenemos que trabajar con los favoritos (va a ser un array definido en el store que al pulsar el botón agregue un elemento en ese array)
  - En el componente de detalles tenemos que mostrar todos los datos de la nave. Aquí definimos un useEffect que ejecute la función que nos trae los datos utilizando la url que guardamos en el store (esa función puede estar en el componenete o puede ser un action(viene de flux)). También un botón que nos devuelva al listado de naves (ese botón tiene que estar dento del link).(Recuerden que aquí vamos a mostrar un spinner hasta que nos lleguen los datos).
  - Agregar un botón que nos lleve a todas la naves.

### Planetas
  - swapi.tech
  - Repetir los pasos de las Naves.

### Favoritos
  - Vamos a definir un array en el store
  - En flux vamos a definir dos actions:
    - La primera para agregar un elemento al array
      - Utilizar spread operator (...)
      - Importante, no agregar uno vacío.
      - No agregar uno que ya existe.
    - La segunda para remover un elemento del array
      - Utilizar filter()
  - Aquí tenemos mezclados personajes, planetas y naves

### El botón del menú (dropdown)
  - Debería mostrar cada uno de los favoritos (con un icono de borrar) con un map()
  - El onClick debe ejecutar el borrar de la lista

#### En los componentes (donde tengo el botón), el onClick debería ejecutar el agregar del action de flux
  - Desafío: Si está en el array de favoritos lo borre y si no está que lo agregue