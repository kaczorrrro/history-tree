class EventData{
  constructor(eventId, type, time, origin = null, name, url){
    this.eventId = eventId;
    this.type = type;
    this.time = time;
    this.origin = origin;
    this.name = name;
    this.url = url;
  }
}
