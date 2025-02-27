export interface Room {
  id: string;
  number: string;
  type: string;
  floor: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  contact: string;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  room_id: string;
  student_id: string;
  start_date: string;
  end_date: string;
  status: string;
  created_at: string;
  updated_at: string;
  room?: Room;
  student?: Student;
}