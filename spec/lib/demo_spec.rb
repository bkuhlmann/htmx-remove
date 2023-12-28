# frozen_string_literal: true

require "rack_helper"

RSpec.describe "Demo", :js do
  using Refinements::Pathname

  subject :app do
    Rack::Static.new proc { [200, {"Content-Type" => "text/html"}, ["<h1>Demo</h1>"]] },
                     {
                       root: app_path,
                       urls: app_path.files.map { |path| "/#{path.basename}" }
                     }
  end

  let(:app_path) { Bundler.root.join "tmp/test" }

  before do
    app_path.remove_tree.make_path
    Bundler.root.join("demo").files.each { |path| path.copy app_path }
    Bundler.root.join("lib/htmx-remove.js").copy app_path
    Capybara.app = app
  end

  it "adds and removes link", :aggregate_failures do
    visit "/index.html"
    expect(page).to have_content("Demonstration")

    click_link "New Link"

    expect(page).to have_content("Cancel Link")

    click_link "Cancel"
    expect(page).not_to have_content("Cancel Link")
  end

  it "adds and removes button", :aggregate_failures do
    visit "/index.html"
    expect(page).to have_content("Demonstration")

    click_link "New Button"
    expect(page).to have_content("Cancel Button")

    click_button "Cancel"
    expect(page).not_to have_content("Cancel Button")
  end
end
