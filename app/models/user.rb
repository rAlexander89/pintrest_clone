# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord

    before_validation :ensure_session_token

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    attr_reader :password

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = self.generate_session_token    
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.generate_session_token
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)   
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        if @user && @user.is_password?(password)
            @user
        else
            nil
        end 
    end

    has_many :pins,
    foreign_key: :author_id,
    class_name: :Pin

    has_many :boards,
    
    class_name: :Board

  
end
