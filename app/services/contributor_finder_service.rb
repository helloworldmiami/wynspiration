require 'octokit'
require 'httparty'

class ContributorFinderService
  def self.find_contributors

    client = Octokit::Client.new(:access_token => ENV["WYNSPR_KEY"])

    user = client.user
    user.login

    gitcon = HTTParty.get("https://api.github.com/repos/helloworldmiami/wynspiration/contributors")

    justdoit = []

      gitcon.each do |con|
        justdoit << {link: con["html_url"], name: con["login"]}
      end
      justdoit
  end
end
