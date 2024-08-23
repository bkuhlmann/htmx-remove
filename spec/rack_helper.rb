# frozen_string_literal: true

require "capybara/cuprite"
require "capybara/rspec"
require "rackup/handler/webrick"
require "spec_helper"

ENV["LD_PRELOAD"] = nil

Capybara.server = :webrick
Capybara.javascript_driver = :cuprite
Capybara.save_path = Bundler.root.join "tmp/capybara"
Capybara.register_driver :cuprite do |app|
  browser_options = {"disable-gpu" => nil, "disable-dev-shm-usage" => nil, "no-sandbox" => nil}
  Capybara::Cuprite::Driver.new app, browser_options:, window_size: [1920, 1080]
end

RSpec.configure { |config| config.include Capybara::DSL, :js }
