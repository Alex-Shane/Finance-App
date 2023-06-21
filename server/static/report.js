

window.onload = function() {
    var period = document.getElementById("period")
    var exchange = document.getElementById("exchange")
    var industry = document.getElementById("industry")
}

function setIndustryOptions() {
    var exchangeObject = {
        "SP500": ['Specialty Industrial Machinery', 'Medical Devices', 'Drug Manufacturers—General', 'Information Technology Services', 'Electronic Gaming & Multimedia', 'Farm Products', 'Software—Infrastructure', 'Staffing & Employment Services', 'Specialty Retail', 'Insurance—Life', 'Diagnostics & Research', 'Specialty Chemicals', 'Airlines', 'Utilities—Regulated Electric', 'Insurance—Property & Casualty', 'Internet Content & Information', 'Internet Retail', 'Packaging & Containers', 'Semiconductors', 'Credit Services', 'Insurance—Diversified', 'REIT—Specialty', 'Asset Management', 'Medical Distribution', 'Electronic Components', 'Software—Application', 'Insurance Brokers', 'Oil & Gas E&P', 'Semiconductor Equipment & Materials', 'Auto Parts', 'Computer Hardware', 'Telecom Services', 'REIT—Residential', 'Aerospace & Defense', 'Oil & Gas Equipment & Services', 'Banks—Diversified', 'Medical Instruments & Supplies', 'Biotechnology', 'Travel Services', 'Integrated Freight & Logistics', 'Resorts & Casinos', 'Packaged Foods', 'Building Products & Equipment', 'Drug Manufacturers—Specialty & Generic', 'Financial Data & Stock Exchanges', 'Healthcare Plans', 'Agricultural Inputs', 'Capital Markets', 'Restaurants', 'Household & Personal Products', 'Specialty Business Services', 'Communication Equipment', 'Banks—Regional', 'Beverages—Non-Alcoholic', 'Discount Stores', 'Railroads', 'Residential Construction', 'Medical Care Facilities', 'Entertainment', 'Solar', 'REIT—Industrial', 'Industrial Distribution', 'REIT—Retail', 'Auto Manufacturers', 'Scientific & Technical Instruments', 'REIT—Healthcare Facilities', 'Oil & Gas Midstream', 'Oil & Gas Refining & Marketing'],
        "NASDAQ": ['Software—Infrastructure', 'Internet Content & Information', 'Internet Retail', 'Semiconductors', 'Utilities—Regulated Electric', 'Drug Manufacturers—General', 'Software—Application', 'Semiconductor Equipment & Materials', 'Telecom Services', 'Beverages—Non-Alcoholic', 'Auto Manufacturers', 'Biotechnology', 'Entertainment'],
        "DOW": ['Note: Industry filtering not allowed for DOW'],
        "NYSE": ['Diagnostics & Research', 'Shell Companies', 'Miscellaneous', 'REIT—Mortgage', 'Real Estate Investment Trusts', 'Rental & Leasing Services', 'Specialty Retail', 'REIT—Diversified', 'Asset Management', 'Drug Manufacturers—General', 'Medical Distribution', 'Beverages—Brewers', 'Auto & Truck Dealerships', 'Specialty Business Services', 'Medical Devices', 'Engineering & Construction', 'Business Equipment & Supplies', 'Gambling', 'Aerospace & Defense', 'Grocery Stores', 'Information Technology Services', 'REIT—Retail', 'Biotechnology', 'Farm Products', 'Auto Parts', 'Security & Protection Services', 'Utilities—Regulated Electric', 'Insurance—Diversified', 'Insurance—Life', 'Gold', 'Apparel Retail', 'Utilities—Diversified', 'Oil & Gas Equipment & Services', 'Insurance—Property & Casualty', 'Property-Casualty Insurers', 'Farm & Heavy Construction Machinery', 'Trusts Except Educational Religious and Charitable', 'Medical Care Facilities', 'Credit Services', 'Insurance—Specialty', 'Health Information Services', 'REIT—Hotel & Motel', 'Software—Application', 'Textile Manufacturing', 'Finance/Investors Services', 'REIT—Residential', 'Industrial Distribution', 'Education & Training Services', 'Insurance Brokers', 'Internet Retail', 'Beverages—Non-Alcoholic', 'Specialty Chemicals', 'Medical Instruments & Supplies', 'Airlines', 'Oil & Gas Midstream', 'Packaging & Containers', 'Entertainment', 'Specialty Industrial Machinery', 'Utilities—Renewable', 'Electrical Equipment & Parts', 'Oil & Gas E&P', 'Coking Coal', 'Drug Manufacturers—Specialty & Generic', 'REIT—Specialty', 'Telecom Services', 'Computer Hardware', 'Metal Fabrication', 'Electronic Components', 'Electric Utilities: Central', 'Restaurants', 'REIT—Office', 'Utilities—Regulated Water', 'Real Estate—Development', 'Building Products & Equipment', 'Banks—Regional', 'Marine Shipping', 'Investment Managers', 'Chemicals', 'Airports & Air Services', 'Semiconductors', 'Software—Infrastructure', 'Internet Content & Information', 'Pollution & Treatment Controls', 'Utilities—Regulated Gas', 'Agricultural Inputs', 'Banks—Diversified', 'Consulting Services', 'Resorts & Casinos', 'Conglomerates', 'Recreational Vehicles', 'Building Materials', 'Communication Equipment', 'Real Estate Services', 'Trucking', 'Beverages—Wineries & Distilleries', 'Personal Services', 'Packaged Foods', 'Staffing & Employment Services', 'Healthcare Plans', 'Other Industrial Metals & Mining', 'Discount Stores', 'Scientific & Technical Instruments', 'Insurance—Reinsurance', 'Advertising Agencies', 'Oil & Gas Drilling', 'Leisure', 'Oil & Gas Integrated', 'Tobacco', 'Thermal Coal', 'Other Precious Metals & Mining', 'Residential Construction', 'Oil & Gas Refining & Marketing', 'Department Stores', 'Travel Services', 'REIT—Healthcare Facilities', 'Household & Personal Products', 'Lodging', 'Steel', 'Waste Management', 'Paper & Paper Products', 'Power Generation', 'Mortgage Finance', 'Railroads', 'REIT—Industrial', 'Furnishings, Fixtures & Appliances', 'Luxury Goods', 'Telecommunications Equipment', 'Footwear & Accessories', 'Capital Markets', 'Financial Data & Stock Exchanges', 'Copper', 'Investment Bankers/Brokers/Service', 'Lumber & Wood Production', 'Auto Manufacturers', 'Finance: Consumer Services', 'Integrated Freight & Logistics', 'Apparel Manufacturing', 'Home Improvement Retail', 'Broadcasting', 'Publishing', 'Solar', 'Utilities—Independent Power Producers', 'Tools & Accessories', 'Consumer Electronics', 'Food Distribution', 'Life Insurance']
      }
    //empty Chapters dropdown
    industry.length = 1;
    //display correct values
    exchangeVal = exchange.value
    for (var i = 0; i < exchangeObject[exchangeVal].length; i++) {
      industry.options[industry.options.length] = new Option(exchangeObject[exchangeVal][i], exchangeObject[exchangeVal][i]);
    }
  }
