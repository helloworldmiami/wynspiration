class WelcomeController < ApplicationController
  def index
    @contribs = ContributorFinderService.find_contributors
  end
end
