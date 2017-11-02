/**
 * device.geo.js
 *
 * Dual licensed under MIT license
 *
 * @author Rhine.Liu
 * @github https://github.com/RhineLiu/device.js
 * @since 2017-06-26
 * @version 1.0.0
 * @date 2017-11-02
 */
(function () {
	/**
	 * Geo
	 * @param options
	 * @param-config enableHighAccuracy {boolean} 是否启用高精度，默认为 false
	 * @param-config timeout {number} 响应超时时间（毫秒），默认为 0，即不限制时长
	 * @param-config maximumAge {number} 缓存时间（毫秒），默认为 0，即不混存，每次都重新获取
	 * @constructor
	 */
	function Geo(options) {
		this.supported = !!navigator.geolocation;
		this.options = options;
	}

	var NOT_SUPPORTED_MESSAGE = 'Geolocation is not supported by your browser!';
	Geo.prototype.get = function (success, error, options) {
		if (this.supported) {
			return navigator.geolocation.getCurrentPosition(success, error, options || this.options);
		} else {
			error({message: NOT_SUPPORTED_MESSAGE});
		}
	};
	Geo.prototype.watch = function (success, error, options) {
		if (this.supported) {
			return navigator.geolocation.watchPosition(success, error, options || this.options);
		} else {
			error({message: NOT_SUPPORTED_MESSAGE});
		}
	};
	Geo.prototype.clearWatch = function (watchId) {
		if (geo.supported) {
			navigator.geolocation.clearWatch(watchId);
		}
	};

	window.Device = window.Device || {};
	Device.Geo = Geo;
})();