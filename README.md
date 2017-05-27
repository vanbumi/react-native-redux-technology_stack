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

6. Mengupdate reducer untuk menghandle action, reducer memiliki 2 argument: current state & action. 

	const reducer = (state = [], action) => {
		if (action.type === 'split_string'){
			return action.payload.split('');
		}
			return state; 
	};

7. Meneruskan perintah Action ke Reducer dengan perintah: **dispatch(action)**;

	store.dispatch(action);

8. Menampilkan hasil update state

	store.getState();

9. Hasilnya kolom sebelah kanan:

	[]
	[]
	{"type":"split_string","payload":"asdf"}
	["asdf"]

**Menambah action baru**

![action2](http://res.cloudinary.com/medioxtra/image/upload/v1495866691/Menambah_action_baru_af8iax.png)

**Update Reducer lagi**

![Update reducer lagi](http://res.cloudinary.com/medioxtra/image/upload/v1495866847/Update_reducer_lagi_v5edi5.png)

**Detail Code**

Baris 25, Untuk menambah action baru:

	const action2 = {
		type: 'add_character',
		payload: 'a'
	}

Baris 31, Meneruskan action ke reducer:

	store.dispatch(action2);

Baris 33, Menampilkan state yg sudah terupdate:

	store.getState();

Baris 4, Menambahkan else if :
		
	} else if (action.type === 'add_character'){

Baris 5 - 6, Melakukan return dengan mutable state:

	//state.push(action.payload);
	//return state;

Baris 7, Melakukan return dengan menambahkan state baru:

	return [...state, action.payload];
								
Hasilnya: 

	{"type":"add_character","payload":"a"}
	["a","s","d","f","a"]

### Membuat aplikasi Redux dengan React Native

**Membuat new aplikasi**

	react-native init technology_stack

**Menginstall library Redux & React Redux**

Buka cli dengan Administrator, ketik:

	npm install --save redux react-redux

![instal redux](http://res.cloudinary.com/medioxtra/image/upload/v1495921096/instal_redux_react-redux_utr0hk.png)	

**Menyiapkan Android Emulator, dengan Android Studio atau lainnya**

	Open new folder > technology_stack

**Dari terminal cmd, jalankan Emulator Android**

	react-native run-android

![and-emulator](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_453,w_200/v1495870704/and-emulator_czcw9f.png)

**Membuka aplikasi dengan code editor tambahkan folder baru src**

	/src

**Tambahkan file app.js**

	/src/app.js

Tambahkan component sbb:

	import React from 'react';
	import { View } from 'react-native';

	const App = () => {
		return(
			<View />
		);
	};

	export default App;

**Hapus semua file pada:**

	index.android.js & index.ios.js

**Dan ketik code minimum untuk ke dua file tsb:**

	import { AppRegistry } from 'react-native';
	import App from './src/app'

	AppRegistry.registerComponent('technology_stack', () => App);

**Update file app.js dengan menambahkan Redux**

	import React from 'react';
	import { View } from 'react-native';
	import { Provider } from 'react-redux';
	import { createStore } from 'redux';

	const App = () => {
		return(
			<Provider store={createStore}>
				<View />
			</Provider>
		)
	};

	export default App;	 	

Detail Code:

- Tambahkan import Provide dari react-native.
- Tambahkan import createStore dari redux.
- Bungkus View dengan Provider Tag dan teruskan createStore pada store property. 

![diagram-provider](http://res.cloudinary.com/medioxtra/image/upload/v1495922876/diagram-provider_orqm1a.png)

Detail gambar:

- Provider Tag bekerja sama dengan Store.
- Masing-masing memiliki tugas spesifik.
- Store menyimpan aplikasi state atau semua data didalam aplikasi.
- Provider translate semua data yang ada di Store sehingga dapat digunakan pada React Aplikasi.
- Provider sebagai perekat komunikasikan dengan React. 

### Menambahkan reducers

* Didalam folder src tambkan folder baru reducers dan file index.js didalam folder reducers, serta ketikkan code sbb:

	import { combineReducer } from 'redux';

	export default combineReducer({
		libraries: () => []
	}); 

Penjelasan code:

- Import combineReducer dari Redux, menggunakan combine karena akan lebih dari satu reducer yang akan di import nantinya.
- Sebagai default export combineReducer, yang melewatkan libaries function yang akan mengembalikan array kosong.

* Udate file app.js dengan menambahkan code sbb:

import reducers from './reducers'; 

	const App = () => {
		return(
			<Provider store={createStore(reducers)}>
				<View />
			</Provider>
		)
	};

export default App;	  	

Penjelasan code:

- import reducer dari folder reducers tadi.
- teruskan reducers di store property, dimana setiap create Store harus melewatkan 1 buah function reducers.

next video 83 need to copy common directory from auth lesson, so i need to do auth lesson dude!.