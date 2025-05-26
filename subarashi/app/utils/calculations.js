export function calculateRentVsBuy(inputs) {
    const {
      annualRent,
      propertyPrice,
      deposit,
      mortgagePeriod,
      interestRate,
      homePriceGrowthRate,
      rentGrowthRate,
      stayDuration,
    } = inputs
  
    // Monthly rent
    const monthlyRent = annualRent / 12
  
    // Mortgage calculations
    const loanAmount = propertyPrice - deposit
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = mortgagePeriod * 12
  
    // Monthly mortgage payment using standard formula
    const monthlyMortgage =
      (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
  
    // Additional monthly costs for buying (maintenance, insurance, etc.)
    const monthlyMaintenanceCost = propertyPrice * 0.001 // 0.1% of property value per month
    const monthlyInsurance = propertyPrice * 0.0005 // 0.05% of property value per month
  
    // Total monthly costs
    const buyMonthlyCost = monthlyMortgage + monthlyMaintenanceCost + monthlyInsurance
    const rentMonthlyCost = monthlyRent
  
    // Total costs over stay duration
    const totalRentCost = calculateTotalRentCost(monthlyRent, rentGrowthRate, stayDuration)
    const totalBuyCost = calculateTotalBuyCost(buyMonthlyCost, deposit, propertyPrice, homePriceGrowthRate, stayDuration)
  
    // Capital difference calculation
    const capitalUsedRenting = deposit // Assuming deposit is invested elsewhere
    const capitalUsedBuying = deposit
    const capitalDifference = ((capitalUsedRenting - capitalUsedBuying) / capitalUsedBuying) * 100
  
    return {
      monthlyRent: Math.round(monthlyRent),
      monthlyMortgage: Math.round(monthlyMortgage),
      buyMonthlyCost: Math.round(buyMonthlyCost),
      rentMonthlyCost: Math.round(rentMonthlyCost),
      totalRentCost: Math.round(totalRentCost),
      totalBuyCost: Math.round(totalBuyCost),
      capitalDifference: Math.round(capitalDifference),
      stayDuration,
    }
  }
  
  function calculateTotalRentCost(monthlyRent, rentGrowthRate, years) {
    let totalCost = 0
    let currentRent = monthlyRent
  
    for (let year = 0; year < years; year++) {
      totalCost += currentRent * 12
      currentRent *= 1 + rentGrowthRate / 100
    }
  
    return totalCost
  }
  
  function calculateTotalBuyCost(monthlyBuyCost, deposit, propertyPrice, homePriceGrowthRate, years) {
    const totalMonthlyCosts = monthlyBuyCost * 12 * years
    const futurePropertyValue = propertyPrice * Math.pow(1 + homePriceGrowthRate / 100, years)
    const capitalGainLoss = futurePropertyValue - propertyPrice
  
    // Total cost = initial deposit + monthly costs - capital gain (or + capital loss)
    return deposit + totalMonthlyCosts - capitalGainLoss
  }
  