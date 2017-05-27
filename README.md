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

	npm install --save redux react-redux

**Menyiapkan Android Emulator, dengan Android Studio atau lainnya**

	Open new folder > technology_stack

**Dari terminal cmd, run Emulator app**

	react-native run-android

![and-emulator](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_453,w_200/v1495870704/and-emulator_czcw9f.png)

**Membuka aplikasi dengan code editor tambahkan folder baru src**

	/src

**Tambahkan file app.js**

	/src/app.js

Tambahkan component sbb:

	import React, { Component } from 'react';
	import { View } from 'react-native';

	const App = () => {
		return(
			<View />
		);
	};

**Hapus semua file pada:**

	index.android.js & index.ios.js

	


