require 'pry'
# require_relative 'account'
# require_relative 'social_media'
# require_relative 'user'
require 'require_all'
require_all '.'

#Write out your test cases here:

sound = User.new("Soundarya", 10, "soundarya@gmail.com")
tanner = User.new("Tanner", 10, "tanner@gmail.com")
andrew = User.new("andrew", 10, "andrew@gmail.com")
mia = User.new("Mia", 10, "mia@gmail.com")

facebook = SocialMedia.new("Facebook", "facebook.com")
twitter = SocialMedia.new("Twitter", "twitter.com")
reddit = SocialMedia.new("Reddit", "reddit.com")
insta = SocialMedia.new("Instagram", "instagram.com")

Account.new(sound, facebook)
Account.new(sound, twitter)
Account.new(sound, insta)
Account.new(tanner, facebook)
Account.new(mia, twitter)
Account.new(andrew, insta)
Account.new(mia, facebook)
Account.new(andrew, twitter)
Account.new(tanner, insta)


binding.pry
0