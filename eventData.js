let currentEventId = 0;//TODO read this from storage

class EventData{

  constructor(type, origin, name, url){
    this.eventId = EventData.nextEventId();
    this.type = type;
    this.time = null;//TODO
    this.origin = origin;
    this.name = name;
    this.url = url;
  }

  static nextEventId(){
      return currentEventId++;
  }

}

let EventType = Object.freeze({"NEW_TAB":1, "URL_CHANGE":2});





