
class Utils {

	static APIGet(url, success_callback, error_callback) {
		fetch(url).then(res => res.json())
		.catch(error_callback)
		.then(success_callback);
	}

	static APIPost(url, data, success_callback, error_callback) {
		fetch(url, {
		  method: 'POST',
		  body: JSON.stringify(data),
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(res => res.json())
		.catch(error_callback)
		.then(success_callback);
	}
}

export default Utils;