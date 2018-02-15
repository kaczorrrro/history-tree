let DEBUG = true

function log(text){
	if (DEBUG) console.log(text)
}


function saveEvent(event){
	chrome.storage.local.set(event.eventId, event);
}

/*
	callback(idToEventMap){...}
*/
function getEvent(eventId, callback){
	chrome.storage.local.get(eventId, callback);
}

/*
	callback(idToEventMap){...}
*/
function getAllEvents(callback){
	chrome.storage.local.get(null, callback);
}



let tabIdToLastEventId = new Map();

function dummyListener(){
	log("Dummy listener");
}

chrome.tabs.onCreated.addListener(dummyListener);
//chrome.tabs.onMoved.addListener(dummyListener);//This might not be usefull
//chrome.tabs.onReplaced.addListener(dummyListener);//This might not be usefull

chrome.tabs.onDetached.addListener(dummyListener);
chrome.tabs.onAttached.addListener(dummyListener);
chrome.tabs.onRemoved.addListener(dummyListener);
chrome.windows.onCreated.addListener(dummyListener);



chrome.tabs.onActivated.addListener((activeInfo)=>{
	// log("onActivated!");
	// chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
	// 	let currentTab = tabs[0]
	// 	log("New URL:" + currentTab.url)
	// })
})

// chrome.tabs.onUpdated.addListener((id, changeInfo, tab)=>{
// 	 if ( ('favIconUrl' in changeInfo) )
// 	 	return;
// 	log("onUpdated: ID: " + id); log(changeInfo); log(tab.title);
// })



function createOnWebsiteChangedListener(){
	chrome.tabs.onUpdated.addListener((id, changeInfo, tab)=>{
		if ( !('status' in changeInfo) || changeInfo.status != "complete" )
			return;
		//TODO check if url changed	
		//log("Website changed: ID: " + id); log("New website" + tab.title);
		let parent = tabIdToLastEventId.get(tab.id);
		let data = new EventData(EventType.URL_CHANGE, parent, tab.title, tab.url);
		tabIdToLastEventId.set(tab.id, data.eventId);
		log(data);
   });
};
createOnWebsiteChangedListener();