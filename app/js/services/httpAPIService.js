angular.module("myDrafts").factory('httpAPI',function($http,config){

	var _getUsers = function(){
		return $http.get(config.BASE_URL+'/users');
	};

	var _getByIdUser = function(id){
		return $http.get(config.BASE_URL+'/user/'+id);
	};
	
	var _postUser = function(user){
		return $http.post(config.BASE_URL+'/user', user);
	}

	var _saveUser = function(user){
		return $http.post(config.BASE_URL+'/users', user);
	};

	var _getFavorite = function(id){
		return $http.get(config.BASE_URL+'/user/'+id+'/favorite');
	};

	var _saveFavorite = function(id,favorite){
		return $http.post(config.BASE_URL+'/user/'+id+'/favorite', favorite);
	};

	var _deleteFavorite = function(id){
		return $http.delete(config.BASE_URL+'/user/favorite/'+id);
	};

	var _updateFavorite = function(favorite){
		return $http.put(config.BASE_URL+'/user/favorite/',favorite);
	};

	return {
		getUsers      : _getUsers,
		getByIdUser   : _getByIdUser,
		postUser      : _postUser,
		saveUser      : _saveUser,
		getFavorite   : _getFavorite,
		saveFavorite  : _saveFavorite,
		deleteFavorite: _deleteFavorite,
		updateFavorite: _updateFavorite
	}
});