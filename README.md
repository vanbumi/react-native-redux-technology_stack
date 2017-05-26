# Tutorial Redux Bahasa Indonesia

## Apa itu Redux?

[Redux](http://redux.js.org/) adalah predictable state container untuk JavaScript aplikasi.

Redux membantu anda untuk membuat aplikasi dengan efisien dan menjaga konsistensi pada environment yang berbeda, seperti pada client, server, dan native, serta mudah untuk melakukan testing. Selain daripada itu, Redux memberikan pengalaman yang luar biasa kepada para pengembang, seperti live code editing dan time traveling debugger.

Anda dapat menggunakan Redux untuk aplikasi React, atau dengan view library yang lain, dengan ukuran size yang cukup kecil berkisar 2kB, termasuk dependencies.

![diagram-redux](http://res.cloudinary.com/medioxtra/image/upload/v1495836771/Redux_ripkwn.png)

### Cara membuat Redux

1. Membuat function reducer:

        const reducer = () => [];

2. Create Store:

        const store = Redux.createStore();


3. Lewatkan reducer ke dalam store argument:

        const store = Redux.createStore(reducer);

4. Menampilkan store pada state saat ini (current state):

        store.getState();

![create-redux](http://res.cloudinary.com/medioxtra/image/upload/v1495839324/redux_efae12.png)                
