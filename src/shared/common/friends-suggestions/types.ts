export interface Friend {
  id: string;
  name: string;
  profilePicture?: string;
  mutualFriends: number;
  isOnline?: boolean;
  lastSeen?: string;
}

export interface FriendRequestCardProps {
  friend: Friend;
  onAddFriend: (friendId: string) => void;
  onRemoveSuggestion: (friendId: string) => void;
  onViewProfile: (friendId: string) => void;
}

export interface FriendSuggestionsSliderProps {
  friends: Friend[];
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  showDots?: boolean;
  showArrows?: boolean;
  onAddFriend: (friendId: string) => void;
  onRemoveSuggestion: (friendId: string) => void;
  onViewProfile: (friendId: string) => void;
  className?: string;
}
