### Zad. 1 ###

- utwórz interface Person zawierajcy następujące klucze: `name`, `lastName`, `age`, `profession`
- utwórz obiekt otypowany tym interfejsem
- następnie nadpisz jeszcze raz interface Person – tym razem z kluczami `sex` i `hobby`
- utwórz nowy obiekt przy pomocy interfejsu Person
- co zaobserwowałeś?

### Zad 2. ###

- utwórz interface Career – opisujący przebieg twojej kakiery, dodaj do niego dwa klucze `education` i `expercience`. Oba klucze będą reprezntowane przez tablice.
- interface powinien zawierać nie tylko wspomniane klucze ale również wszstkei klucze z interface Person – użyj formułu `extend`
- utwórz obiekt przy pomocy interface'u

### Zad. 3 ###

- utwórz typ Project powinien on się składać z dwu Typów (Union type) – Frontend i Backend 
- typ Frontend powinien zawierać klucz `frontend-lang` i `db`
- typ Backend powinien zawierać klucze `frontend-framework` i `css-framework`
- utwórz obiekt przy pomocy typu Project


### Zad. 4. ###

- utwórz i otypuj funkcję konstruktor Person dla obiektu `{name: string, lastName: string}`
- utwórz i otypuj klasę konstruktor Person dla obiektu `{name: string, lastName: string}`
- utwórz klasę Employee na podstawie klasy Person – z dodatkowym kluczem proffesion

### Zad. 5. ###

- utwórz klasę Employee powinna ona implementować trzy interfejsy – Person, Career oraz Expectations 
- utwórz interfejs Expectations – powinien on zawierać chronione własności `salary` i `position`

### Zad. 6. ###

- utwórz klasę Contry z parametrem code `` reprezentowanym przez kod kraju.
- wykonaj testowe zapytanie do `https://restcountries.eu/rest/v2/${country}` i na jego podtsawie stwórz interfejs dla kraju
- utwórz metodę `loadData` w klasie przy pomocy której pobierzesz dane do obiektu
- wyświetl informacje o aktualnym kraju
- otypuj swoją klasę
