export interface IUser {
  _id?: number;
  username: string;
  city?: string;
  from?: string;
  relationship?: number;
  coverPicture?: string;
  profilePicture: string;
  desc?: string;
}

export interface IPost {
  _id: number;
  likes: any;
  userId: number;
  createdAt: string;
  desc: string;
  img: string;
  comment: string;
}

export interface IFriend {
  username: string;
  profilePicture: string;
}

export interface ArrivalMessage {
  sender: string;
  text: string;
  createdAt: any;
}

export interface CurrentChat {
  _id: number;
  members: any;
  sender: string;
  text: string;
  conversationId: number;
}

export interface ChatOnlineProps {
  onlineUsers: any;
  currentId: number;
  setCurrentChat: any;
}

export interface ConversationProps {
  conversation: {
    members: any;
  };
  currentUser: {
    _id: number;
  };
}

export interface MessageProps {
  own: boolean;
  message: {
    createdAt: string;
    text: string;
  };
}

export interface FeedProps {
  username?: string;
}

export interface RightbarProps {
  user?: {
    _id?: number;
    username: string;
    city?: string;
    relationship?: number;
  };
}

export type o = {
  username: string;
  profilePicture: string;
};
