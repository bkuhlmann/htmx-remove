# frozen_string_literal: true

guard :rspec, cmd: "NO_COVERAGE=true bin/rspec --format documentation" do
  watch %r(^spec/.+_spec\.rb$)
  watch(%r(^lib/(.+)\.rb$)) { |m| "spec/lib/#{m[1]}_spec.rb" }
  watch(%r(^lib/htmx-remove\.js$)) { "spec/lib/demo_spec.rb" }
  watch("spec/spec_helper.rb") { "spec" }
end
