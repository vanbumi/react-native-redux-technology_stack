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
Ralat *empty array 

**Reducer** adalah function yang memproduksi (return) beberapa jumlah data.

**Action** adalah plain JavaScript object ( "{ }" ) yang memberitahukan Reducer cara memodifikasi data.
Action memiliki satu syarat harus memiliki sebuah **type** property.

**State** adalah Data aplikasi, misalnya: value dari input field, data list, gambar, seluruh data yang berada di dalam aplikasi, dikumpulkan menjadi **State**.

**Store** adalah container yang menyimpan Reducer & State dalam sebuah aplikasi. 

### Contoh aplikasi kecil Redux

Sebuah string 'asdf' (kata/word) akan dirubah (split) menjadi menjadi karakter (huruf) array:


![contoh-redux](http://res.cloudinary.com/medioxtra/image/upload/v1495859052/Redux-contoh-case_jqxexi.png)

**Actions**
Memuat string: 'asdf' & instruksi: split, kemudian di lewatkan/oper/teruskan ke Reducer.

**Reducer**
Akan mereturn/mengembalikan string yang sudah di split kedalam sebuah array, kemdian di teruskan ke State.

**State**
Akan menerima dari Reducer data single karakter array ['a', 's', 'd', 'f'].

**Update Code diatas**

![tiny-app-redux](http://res.cloudinary.com/medioxtra/image/upload/v1495861579/Redux_sample_tiny_app_dkpooy.png)

**Detail Code**

1. Membuat function reducer:

        const reducer = () => [];

2. Create Store:

        const store = Redux.createStore();


3. Lewatkan reducer ke dalam store argument:

        const store = Redux.createStore(reducer);

4. Menampilkan store pada state saat ini (current state):

        store.getState();

5. Membuat action -> plain JS object, action memiliki 2 property -> type (instruksi) & payload (data yang akan dimodifikasi).

   		const action = {
			type: 'split_string',
			payload: 'asdf'
        };         

6. Mengupdate reducer -> reducer memiliki 2 argement: current state & action. 

		const reducer = (state = [], action) => {
			if (action.type === 'split_string'){
				return action.payload.split(' ');
			}
				return state; 
		};

7. Meneruskan perintah Action ke Reducer dengan perintah: **dispatch(action)**;

		store.dispatch(action);

8. Menampilkan hasil update state

		store.getState();
		
						 