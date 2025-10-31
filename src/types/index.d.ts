export interface Event {
	id: number;
  	name: string;
  	total_seats: number;
}

export interface Booking {
	id: number,
	event_id: number,
	user_id: number,
	created_at: Date
}
