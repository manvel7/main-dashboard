import { AxiosError } from 'axios';
import api from '@/shared/api/axios';
import { CreateUserFormData } from '@/features/user/model/useCreateUser';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface UserCard {
  id: string;
  name: string;
  avatar?: string | null;
  role: string;
  socialMedia: {
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    linkedin: string | null;
  };
  followers: number;
  following: number;
  totalPosts?: number;
  totalLikes?: number;
  totalDislikes?: number;
  totalViews?: number;
  totalComments?: number;
  notifications?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  zipCode: string;
  state: string;
  address: string;
  company: string;
  role: string;
}

interface UserState {
  usersCard: UserCard[];
  usersList: User[];
}

const mockUserCards: UserCard[] = [
  {
    id: '1',
    name: 'Jayvion Simon',
    role: 'CEO',
    avatar: null,
    socialMedia: {
      facebook: 'https://facebook.com/jayvion.simon',
      instagram: 'https://instagram.com/jayvion.simon',
      linkedin: 'https://linkedin.com/in/jayvion-simon',
      twitter: 'https://twitter.com/jayvion.simon',
    },
    followers: 9910,
    following: 1950,
    totalPosts: 9120,
    totalLikes: 45000,
    totalDislikes: 1200,
    totalViews: 125000,
    totalComments: 8900,
    notifications: 15,
  },
  {
    id: '2',
    name: 'Lucian Obrien',
    role: 'CTO',
    avatar: null,
    socialMedia: {
      facebook: 'https://facebook.com/lucian.obrien',
      instagram: 'https://instagram.com/lucian.obrien',
      linkedin: 'https://linkedin.com/in/lucian-obrien',
      twitter: 'https://twitter.com/lucian.obrien',
    },
    followers: 1950,
    following: 9120,
    totalPosts: 6980,
    totalLikes: 32000,
    totalDislikes: 800,
    totalViews: 98000,
    totalComments: 5600,
    notifications: 8,
  },
  {
    id: '3',
    name: 'Deja Brady',
    role: 'Project Coordinator',
    avatar: null,
    socialMedia: {
      facebook: 'https://facebook.com/deja.brady',
      instagram: 'https://instagram.com/deja.brady',
      linkedin: 'https://linkedin.com/in/deja-brady',
      twitter: 'https://twitter.com/deja.brady',
    },
    followers: 9120,
    following: 6980,
    totalPosts: 8490,
    totalLikes: 38000,
    totalDislikes: 950,
    totalViews: 110000,
    totalComments: 7200,
    notifications: 12,
  },
  {
    id: '4',
    name: 'Harrison Phillips',
    role: 'Senior Developer',
    avatar: null,
    socialMedia: {
      facebook: 'https://facebook.com/harrison.phillips',
      instagram: 'https://instagram.com/harrison.phillips',
      linkedin: 'https://linkedin.com/in/harrison-phillips',
      twitter: 'https://twitter.com/harrison.phillips',
    },
    followers: 7500,
    following: 3200,
    totalPosts: 5600,
    totalLikes: 28000,
    totalDislikes: 600,
    totalViews: 85000,
    totalComments: 4200,
    notifications: 5,
  },
  {
    id: '5',
    name: 'Reece Chung',
    role: 'UI/UX Designer',
    avatar: null,
    socialMedia: {
      facebook: 'https://facebook.com/reece.chung',
      instagram: 'https://instagram.com/reece.chung',
      linkedin: 'https://linkedin.com/in/reece-chung',
      twitter: 'https://twitter.com/reece.chung',
    },
    followers: 6800,
    following: 4100,
    totalPosts: 7200,
    totalLikes: 35000,
    totalDislikes: 750,
    totalViews: 92000,
    totalComments: 5800,
    notifications: 9,
  },
  {
    id: '6',
    name: 'Marshall Nichols',
    role: 'Product Manager',
    avatar: null,
    socialMedia: {
      facebook: 'https://facebook.com/marshall.nichols',
      instagram: 'https://instagram.com/marshall.nichols',
      linkedin: 'https://linkedin.com/in/marshall-nichols',
      twitter: 'https://twitter.com/marshall.nichols',
    },
    followers: 8200,
    following: 2800,
    totalPosts: 6300,
    totalLikes: 31000,
    totalDislikes: 650,
    totalViews: 78000,
    totalComments: 3900,
    notifications: 7,
  },
];

const initialState: UserState = {
  usersCard: mockUserCards,
  usersList: [],
};

// Async thunk
export const createUser = createAsyncThunk(
  'users/createUser',
  async (user: CreateUserFormData, { rejectWithValue }) => {
    try {
      const response = await api.post('/users', user);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.usersList.push(action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
