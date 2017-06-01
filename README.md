# Tutorial Redux Bahasa Indonesia

## Apa itu Redux?

[Redux](http://redux.js.org/) adalah predictable state container untuk JavaScript aplikasi.

Redux membantu anda untuk membuat aplikasi dengan efisien dan menjaga konsistensi pada environment yang berbeda, seperti pada client, server, dan native, serta mudah untuk melakukan testing. Selain daripada itu, Redux memberikan pengalaman yang luar biasa kepada para pengembang, seperti live code editing dan time traveling debugger.

Anda dapat menggunakan Redux untuk aplikasi React, atau dengan view library yang lain, dengan ukuran size yang cukup kecil berkisar 2kB, termasuk dependencies.

![diagram-redux](http://res.cloudinary.com/medioxtra/image/upload/v1495836771/Redux_ripkwn.png)

**Detail Diagram**

**Reducer** adalah function yang memiliki kembalian data (return some data).

**Action** adalah plain **JavaScript Object** ( "{ }" ) yang memberitahukan Reducer cara memodifikasi data. Syarat dari Action adalah harus memiliki sebuah **type** property.

**State** adalah Data dari sebuah aplikasi yang digunakan, misalnya: value dari input field, data list, gambar, seluruh data yang berada di dalam aplikasi, dikumpulkan menjadi **State**.

**Store** adalah container yang menyimpan Reducer & State pada sebuah aplikasi.

> **Untuk Diingat** Jadi Redux merukan satu kesatuan yang terdiri dari **Store** & **Action**, dimana Store terdiri dari **Reducer** & **State**.

### Cara membuat Redux

	// Step membuat Redux

	// 1-Membuat function reducer
	const reducer = () => [];

	// 2-Membuat store
	const store = Redux.createStore(reducer);

	// 3-Menampilkan current state
	store.getState();

**Detail code**

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

### Contoh aplikasi kecil Redux

Sebuah string 'asdf' (kata/word) akan dirubah (split) menjadi menjadi array dari single karakter (huruf) :

![contoh-redux](http://res.cloudinary.com/medioxtra/image/upload/v1495859052/Redux-contoh-case_jqxexi.png)

**Actions**
Memuat string: 'asdf' & instruksi: split, kemudian di lewatkan/oper/teruskan ke Reducer.

**Reducer**
Akan me-return/mengembalikan string yang sudah di split kedalam sebuah array, kemdian di teruskan ke State.

**State**
Akan menerima dari Reducer data single karakter array ['a', 's', 'd', 'f'].

**Update Code diatas**

![tiny-app-redux](http://res.cloudinary.com/medioxtra/image/upload/v1495861579/Redux_sample_tiny_app_dkpooy.png)

**Membuat aplikasi redux 'asdf'**

	// 1-Membuat Action
	const action = {
		type: 'split_string',
	payload: 'asdf'
	};

	// 2-Mengupdate function reducer
	const reducer = (state=[], action) => {
		if (action.type === 'split_string') {
		return action.payload.split('');
	}
	
	return state;
	};

	// 3-Membuat store
	const store = Redux.createStore(reducer);

	// 4-Meneruskan action ke reducer
	store.dispatch(action);

	// 5-Menampilkan current state
	store.getState();

**Detail Code**

1. Membuat action -> plain **JS Object**, action memiliki 2 property -> **type** (instruksi) & **payload** (data yang akan dimodifikasi).

		const action = {
			type: 'split_string',
			payload: 'asdf'
		};         

2. Mengupdate reducer untuk menghandle action, reducer memiliki 2 argument: **current state** & **action**. 

		const reducer = (state = [], action) => {
			if (action.type === 'split_string'){
				return action.payload.split('');
			}
				return state;
		};

3. Meneruskan perintah Action ke Reducer dengan perintah: **dispatch(action)**;

		store.dispatch(action);

4. Menampilkan hasil update state

		store.getState();

5. Hasilnya kolom sebelah kanan:

		{"type":"split_string","payload":"asdf"}
		["a","s","d","f"]

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

## Membuat aplikasi Redux dengan React Native

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

Tambahkan component pada app.js sbb:

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

**Update file app.js dengan menambahkan Redux Provider & createStore**

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

**Detail Code**:

- import **Provider** dari react-native.
- import **createStore** dari redux.
- Bungkus **View Tag** dengan **Provider Tag** dan teruskan **createStore** pada store property. 

![diagram-provider](http://res.cloudinary.com/medioxtra/image/upload/v1495922876/diagram-provider_orqm1a.png)

**Detail gambar**:

- Provider Tag bekerja sama dengan Store.
- Masing-masing memiliki tugas spesifik.
- Store menyimpan  State aplikasi atau semua data didalam aplikasi.
- Provider menterjemahkan semua data yang ada di Store sehingga dapat digunakan pada React Aplikasi.
- Provider sebagai **Perekat Komunikasi** dengan React. 

### Menambahkan reducers

1. Didalam folder src tambkan folder baru **reducers** dan file index.js didalam nya, serta ketikkan code sbb:

		import { combineReducer } from 'redux';

		export default combineReducer({
			libraries: () => []
		}); 

**Penjelasan code**:

- Import **combineReducer** dari **Redux**, menggunakan combine karena akan lebih dari satu **reducer** yang akan di import nantinya.
- Export default combineReducer, yang melewatkan **libraries function** yang mengembalikan array kosong.

2. Udate file app.js dengan menambahkan code sbb:

		import reducers from './reducers'; 

		const App = () => {
			return(
				<Provider store={createStore(reducers)}>
					<View />
				</Provider>
			)
		};

		export default App;	  	

**Penjelasan code**:

- import **reducer** dari **folder reducers** tadi.
- teruskan reducers di **store property**, *dimana setiap create **Store** harus melewatkan 1 buah **function reducers***.

### Membuat header & render header.

1. Buat folder baru components > common : 

	Kemudian buat component2x sebagai berikut: 
	Button.js, Card.js, CardSection.js, Header.js, index.js, Input.js, Spinner.js 

	-> file ini adalah component reusable, silahkan download dari file repo ini.

2. Import Header di app.js

		import { Header } from './components/common' 

3. Update code di app.js:

		<Provider store={createStore(reducers)}>
			<View>
				<Header headerText='Technology Stack' />
			</View>
		</Provider>

4. Refresh emulator screen.

![tech_stack](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_300,w_150/v1495948874/technology_stack_vnas6e.png)

### Membuat State Library

Kita akan membuat **State**, dalam aplikasi ini akan ada 2 buah library data, yaitu **List of Library** dan **Library Currently Selected**, List Library adalah daftar seluruh data dan Library Selected adalah data yang di select/view oleh user.

Aplikasi ini tidak melibatkan database di server, sebaliknya *hard coding* (statik data) didalam app itu sendiri (daftar data akan di masukan ke dalam aplikasi secara manual).

### Reducer

**Reducer** menghasilkan **State** data dan State adalah **Data** dari sebuah aplikasi. 

1. Didalam folder reducers **index.js** akan memuat library data di dalamnya:

		libraries = () => []

2. Selanjutnya kita akan membuat 2 buah **reducer** terpisah, yaitu **Library Reducer** dan **Selection Reducer**.

![two-reducers](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_200,w_700/v1495953135/dua-reducer_yjstan.png)

Untuk itu buatlah file baru nama **LibraryReducer.js** dalam folder reducers, dan tuliskan codenya sbb:

	export default () => [
		
	];

3. Kemudian import ke dalam file **index.js**, pada file reducers/index.js:

		import LibraryReducer from './LibraryReducer';

4. Update function combineReducer pada file reducers/index.js sbb:

		export default combineReducers({
			libraries: LibraryReducer
		}); 		

	**Detail code** -> Perlu di ingat disini kita lakukan assign **LibraryReducer** dengan **KEY** **libraries**.

5. Membuat file json **LibraryList.json** di dalam folder reducers. (Silahkan copas file json di repository).

> **Catatan** file json memuat content seluruh nya adalah string, jadi seluruh text content selain value integer harus diberi *"double/single quote"*, contoh: 
		
	"id": 0, 
	"title": "Webpack"
	....

6. Pada file LibraryReducer.js import file json tsb sebagai **data** dari array of object:

		import data from './reducers/LibraryList.json'

		export default () => [
			
		];	

	Update menjadi:

		export default () => data; 	

7. Membuat component baru untuk merender list of data json diatas. Buatlah file components/LibraryList.js dan masukan code boiler plate sbb:

		import React, { Component } from 'react';

		class LibraryList extends Component {
			render(){
				return;
			}
		}

		export default LibraryList;






### Connect Function.


