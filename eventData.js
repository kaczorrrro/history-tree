class EventData{
  constructor(tabId, eventId, type, time, origin = null, name, url){
    this.tabId = tabId;
    this.eventId = eventId;
    this.type = type;
    this.time = time;
    this.origin = origin;
    this.name = name;
    this.url = url;
  }
}
