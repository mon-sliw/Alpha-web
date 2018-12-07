import {Category} from '../admin/Category';
import {User} from '../user/User';

export class Activity {
  id: number;
  name: string;
  description: string;
  category: Category;
  date: Date;
  author: User;
  placeId: string;
  city: string;
  members: User[];
}
