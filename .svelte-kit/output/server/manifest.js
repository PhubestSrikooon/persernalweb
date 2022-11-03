export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","favicon.png:Zone.Identifier","public/Fonts/Poppins/Poppins-Black.ttf","public/Fonts/Poppins/Poppins-BlackItalic.ttf","public/Fonts/Poppins/Poppins-Bold.ttf","public/Fonts/Poppins/Poppins-BoldItalic.ttf","public/Fonts/Poppins/Poppins-ExtraBold.ttf","public/Fonts/Poppins/Poppins-ExtraBoldItalic.ttf","public/Fonts/Poppins/Poppins-ExtraLight.ttf","public/Fonts/Poppins/Poppins-ExtraLightItalic.ttf","public/Fonts/Poppins/Poppins-Italic.ttf","public/Fonts/Poppins/Poppins-Light.ttf","public/Fonts/Poppins/Poppins-LightItalic.ttf","public/Fonts/Poppins/Poppins-Medium.ttf","public/Fonts/Poppins/Poppins-MediumItalic.ttf","public/Fonts/Poppins/Poppins-Regular.ttf","public/Fonts/Poppins/Poppins-SemiBold.ttf","public/Fonts/Poppins/Poppins-SemiBoldItalic.ttf","public/Fonts/Poppins/Poppins-Thin.ttf","public/Fonts/Poppins/Poppins-ThinItalic.ttf","public/Images/DaVinci-Resolve.png","public/Images/adobe-after-effect.png","public/Images/adobe-premiere-pro.png","public/Images/c-sharp-icon.png","public/Images/certificate/cer1-python.png","public/Images/certificate/cer2-seacamp.png","public/Images/certificate/cer3-quantum.png","public/Images/certificate/cer4-nano.png","public/Images/css-icon.png","public/Images/figma.png","public/Images/html-icon.png","public/Images/javascript-icon.png","public/Images/lua-icon.png","public/Images/me.jpg","public/Images/virusscope.PNG","public/lang.json"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg",".PNG":"image/png",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-94ae2ca0.js","imports":["_app/immutable/start-94ae2ca0.js","_app/immutable/chunks/index-455d9e01.js","_app/immutable/chunks/singletons-7e0baf24.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "collection",
				pattern: /^\/collection\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
