let DEBUG = true

function log(text){
	if (DEBUG) console.log(text)
}

function dummy_listener(){
	log("Dummy listener");
}

chrome.tabs.onCreated.addListener(dummy_listener);
//chrome.tabs.onMoved.addListener(dummy_listener);//This might not be usefull
//chrome.tabs.onReplaced.addListener(dummy_listener);//This might not be usefull

chrome.tabs.onDetached.addListener(dummy_listener);
chrome.tabs.onAttached.addListener(dummy_listener);
chrome.tabs.onRemoved.addListener(dummy_listener);

chrome.windows.onCreated.addListener(dummy_listener);
chrome.windows.on

chrome.tabs.onActivated.addListener((activeInfo)=>{
	log("onActivated!");
	chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
		let currentTab = tabs[0]
		log("New URL:" + currentTab.url)
	})
})

chrome.tabs.onUpdated.addListener((id, changeInfo, tab)=>{
	log("onUpdated: ID: " + id);log(changeInfo);log(tab);
})