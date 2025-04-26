/**
 * Custom security audit report generator
 * This replaces the OpenAI integration with our own implementation
 */

// Define property types with human-readable formats
const propertyTypeMap: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  retail: "Retail",
  other: "Other",
};

// Define security concerns with human-readable formats
const securityConcernsMap: Record<string, string> = {
  theft: "Theft/Burglary",
  vandalism: "Vandalism",
  trespassing: "Trespassing",
  violence: "Violence/Assault",
  fire: "Fire Safety",
  cyber: "Cybersecurity",
  access: "Unauthorized Access",
  other: "Other Concerns",
};

// Define services with human-readable formats
const servicesMap: Record<string, string> = {
  guards: "Security Guards",
  surveillance: "Surveillance Systems",
  access: "Access Control Systems",
  alarm: "Alarm Systems",
  housekeeping: "Housekeeping Services",
  maintenance: "Property Maintenance",
  consulting: "Security Consulting",
  training: "Security Training",
};

// Define risk levels and corresponding descriptions
const riskLevels = {
  high: "Immediate action required. These vulnerabilities pose significant risks to your business security and should be addressed as top priority.",
  medium: "Action recommended within 1-3 months. These vulnerabilities present moderate risks that should be addressed in your short-term security planning.",
  low: "Action suggested when possible. These items present minimal immediate risk but should be addressed to improve overall security posture."
};

// Security measure recommendations by property type
const recommendationsByPropertyType: Record<string, string[]> = {
  'residential': [
    'Perimeter security with access control',
    'CCTV monitoring at entrances and common areas',
    'Intercom or visitor management system',
    'Security personnel at main entrance',
    'Well-lit common areas and parking',
    'Resident identification system',
    'Regular security patrols'
  ],
  'commercial': [
    'Access control systems with keycard or biometric entry',
    'CCTV coverage at entrances, exits, and key areas',
    'Visitor management system',
    'Alarm systems connected to central monitoring',
    'Emergency response protocols and training',
    'Secure server room with limited access',
    'Fire detection and suppression systems'
  ],
  'industrial': [
    'Perimeter security with controlled access points',
    'CCTV monitoring of production areas and storage',
    'Employee identification and access control',
    'Hazardous materials security',
    'Vehicle inspection protocols',
    'Security personnel at entry points',
    'Emergency evacuation procedures'
  ],
  'retail': [
    'CCTV systems with coverage of sales floor, stockroom, and entrances',
    'Electronic article surveillance (EAS) systems',
    'Cash handling procedures and secure storage',
    'Panic buttons at registers',
    'Loss prevention staff during peak hours',
    'Security gates and barriers during closed hours',
    'Customer and employee theft prevention training'
  ],
  'other': [
    'Access control systems at all entrances',
    'CCTV coverage of key areas',
    'Visitor management and screening',
    'Emergency notification systems',
    'Security personnel presence',
    'Well-lit exterior and interior areas',
    'Regular security assessments'
  ]
};

// Security concerns and recommendations mapping
const concernRecommendations: Record<string, string[]> = {
  'theft': [
    'Install high-resolution CCTV cameras covering all entry/exit points and valuable storage areas',
    'Implement access control systems with unique credentials for each employee',
    'Install proper lighting in all areas, especially dark corners and exterior spaces',
    'Consider implementing inventory tracking technology',
    'Regular security audits and inventory checks'
  ],
  'vandalism': [
    'Install impact-resistant windows and doors',
    'Implement perimeter security measures including fencing where appropriate',
    'Enhanced exterior lighting with motion sensors',
    'CCTV coverage of building exterior and vulnerable areas',
    'Consider anti-graffiti coatings for exposed walls'
  ],
  'trespassing': [
    'Clear boundary markings and signage',
    'Perimeter fencing or barriers',
    'Motion-activated lighting and alarms',
    'Regular security patrols',
    'Trespasser detection systems'
  ],
  'violence': [
    'Panic buttons in high-risk areas',
    'Training for staff on conflict de-escalation',
    'Clear emergency protocols for violent incidents',
    'Enhanced access control during high-risk periods',
    'Security presence in areas with public interaction'
  ],
  'fire': [
    'Comprehensive fire detection systems',
    'Fire suppression systems appropriate for the property',
    'Regular fire drills and evacuation training',
    'Clear emergency exit signage and access',
    'Fire-resistant storage for important documents and assets'
  ],
  'cyber': [
    'Secure server rooms with controlled access',
    'Integration of physical and cyber security systems',
    'Employee training on cyber-physical security threats',
    'Regular security assessments of networked security systems',
    'Secure backup systems for security footage and access logs'
  ],
  'access': [
    'Multi-factor authentication for sensitive areas',
    'Visitor management system with identity verification',
    'Electronic access control with detailed access logs',
    'Regular review and updating of access rights',
    'Security personnel at main entry points'
  ]
};

/**
 * Analyzes the form data and generates security vulnerabilities
 * @param formData The form data from the security audit form
 * @returns List of vulnerabilities with risk levels
 */
function identifyVulnerabilities(formData: any) {
  const vulnerabilities = [];
  const existingSecurity = formData.existingSecurity?.toLowerCase() || '';
  const propertyTypeKey = formData.propertyType?.toLowerCase() || 'commercial';
  const concerns = formData.concerns || [];
  
  // Basic physical security vulnerabilities
  if (!existingSecurity.includes('camera') && !existingSecurity.includes('cctv') && !existingSecurity.includes('surveillance')) {
    vulnerabilities.push({
      item: 'Lack of video surveillance',
      description: 'No CCTV or video monitoring system in place',
      risk: 'high',
      recommendation: 'Install a comprehensive CCTV system covering all entry/exit points and critical areas.'
    });
  }
  
  if (!existingSecurity.includes('access control') && !existingSecurity.includes('keycard')) {
    vulnerabilities.push({
      item: 'Inadequate access control',
      description: 'No formal access control system for staff and visitors',
      risk: 'high',
      recommendation: 'Implement an electronic access control system with unique credentials for each authorized person.'
    });
  }
  
  if (!existingSecurity.includes('alarm')) {
    vulnerabilities.push({
      item: 'Missing alarm system',
      description: 'No intrusion detection or alarm system',
      risk: 'medium',
      recommendation: 'Install a monitored alarm system connected to a 24/7 monitoring center.'
    });
  }
  
  if (!existingSecurity.includes('guard') && !existingSecurity.includes('security personnel')) {
    vulnerabilities.push({
      item: 'Absence of security personnel',
      description: 'No security staff on premise',
      risk: 'medium',
      recommendation: 'Consider security personnel during business hours or high-risk periods.'
    });
  }
  
  if (!existingSecurity.includes('light') && !existingSecurity.includes('illumination')) {
    vulnerabilities.push({
      item: 'Insufficient lighting',
      description: 'Inadequate lighting in exterior areas and potential blind spots',
      risk: 'medium',
      recommendation: 'Enhance lighting in all exterior areas, parking lots, and potential blind spots.'
    });
  }
  
  // Add specific vulnerabilities based on security concerns
  if (concerns.includes('theft')) {
    vulnerabilities.push({
      item: 'Theft risk',
      description: 'Current measures insufficient to prevent theft',
      risk: 'high',
      recommendation: 'Implement a comprehensive anti-theft strategy including improved CCTV, access control, and inventory management.'
    });
  }
  
  if (concerns.includes('access')) {
    vulnerabilities.push({
      item: 'Unauthorized access risk',
      description: 'Potential for unauthorized individuals to access restricted areas',
      risk: 'high',
      recommendation: 'Implement multi-factor authentication and visitor management systems.'
    });
  }
  
  if (concerns.includes('fire')) {
    vulnerabilities.push({
      item: 'Fire safety risk',
      description: 'Inadequate fire detection and prevention systems',
      risk: 'high',
      recommendation: 'Install comprehensive fire detection, alarm, and suppression systems appropriate for your property type.'
    });
  }
  
  // Add property-specific vulnerabilities based on property type
  if (propertyTypeKey === 'retail' && !existingSecurity.includes('eas') && !existingSecurity.includes('electronic article')) {
    vulnerabilities.push({
      item: 'Lack of anti-theft systems',
      description: 'No Electronic Article Surveillance (EAS) or similar systems',
      risk: 'high',
      recommendation: 'Install EAS systems at all exits and properly tag merchandise.'
    });
  }
  
  if (propertyTypeKey === 'industrial' && !existingSecurity.includes('perimeter') && !existingSecurity.includes('fence')) {
    vulnerabilities.push({
      item: 'Inadequate perimeter security',
      description: 'No proper perimeter security for industrial facility',
      risk: 'high',
      recommendation: 'Implement robust perimeter security including fencing, gate controls, and vehicle inspection.'
    });
  }
  
  return vulnerabilities;
}

/**
 * Generates a security audit report based on the provided form data
 * @param formData The form data from the security audit form
 * @returns A security audit report
 */
export async function generateSecurityAuditReport(formData: any): Promise<string> {
  try {
    // Map values to human-readable format
    const propertyType = propertyTypeMap[formData.propertyType] || formData.propertyType || 'Commercial';
    const propertyTypeKey = formData.propertyType?.toLowerCase() || 'commercial';
    
    // Get human-readable concerns and services
    const concernsList = formData.concerns || [];
    const concerns = concernsList.map((c: string) => securityConcernsMap[c] || c).join(", ") || "None specified";
    
    const servicesList = formData.services || [];
    const services = servicesList.map((s: string) => servicesMap[s] || s).join(", ") || "None specified";
    
    // Extract other information
    const fullName = formData.fullName || 'Client';
    const propertySize = formData.propertySize || 'Unspecified';
    const address = formData.address || 'Unspecified';
    const occupants = formData.occupants || 'Unspecified';
    const existingSecurity = formData.existingSecurity || 'None';
    const securityIncidents = formData.securityIncidents || 'None reported';
    const neighborhoodSecurity = formData.neighborhoodSecurity || 'Not specified';
    const budget = formData.budget || 'Not specified';
    const timeline = formData.timeline || 'Not specified';
    
    // Generate vulnerabilities
    const vulnerabilities = identifyVulnerabilities(formData);
    
    // Determine recommendations based on property type and concerns
    let recommendations: string[] = [];
    
    // Add base recommendations for property type
    const baseRecommendations = recommendationsByPropertyType[propertyTypeKey] || 
                               recommendationsByPropertyType.commercial;
    recommendations = [...baseRecommendations];
    
    // Add specific recommendations based on concerns
    concernsList.forEach((concern: string) => {
      if (concernRecommendations[concern]) {
        recommendations = [...recommendations, ...concernRecommendations[concern]];
      }
    });
    
    // Remove duplicates
    recommendations = Array.from(new Set(recommendations));
    
    // Create implementation timeline based on budget and timeline
    let implementationPeriod = '3-6 months';
    if (timeline === 'Immediate') {
      implementationPeriod = '1-2 months';
    } else if (timeline === 'Long-term') {
      implementationPeriod = '6-12 months';
    }
    
    // Generate implementation timeline
    const implementationPlan = [
      { 
        phase: 'Phase 1 (Immediate - 30 days)', 
        actions: recommendations.slice(0, 3).map(r => `${r}`) 
      },
      { 
        phase: `Phase 2 (1-${implementationPeriod === '1-2 months' ? '2' : '3'} months)`, 
        actions: recommendations.slice(3, 6).map(r => `${r}`) 
      },
      { 
        phase: `Phase 3 (${implementationPeriod})`, 
        actions: recommendations.slice(6, 10).map(r => `${r}`) 
      }
    ];
    
    // Format the report
    const report = `
# SECURITY AUDIT REPORT

## For: ${fullName}
_Date: ${new Date().toLocaleDateString()}_

## 1. EXECUTIVE SUMMARY

This security audit report has been prepared for ${fullName} based on the information provided regarding your ${propertyType.toLowerCase()} property located at ${address}. The assessment evaluates your current security posture and identifies potential vulnerabilities and risks.

Key findings from this security audit include:

* ${vulnerabilities.length} security vulnerabilities identified (${vulnerabilities.filter(v => v.risk === 'high').length} high-risk, ${vulnerabilities.filter(v => v.risk === 'medium').length} medium-risk)
* Current security systems: ${existingSecurity}
* Primary security concerns: ${concerns}
* Property has approximately ${occupants} regular occupants
* Budget range: ${budget}
* Implementation timeline preference: ${timeline}

This report provides a detailed analysis of your property's security status, identified vulnerabilities, and specific recommendations to enhance your overall security posture.

## 2. PROPERTY SECURITY ASSESSMENT

**Property Details:**
* Property Type: ${propertyType}
* Property Size: ${propertySize} sq ft/m²
* Address: ${address}
* Number of Regular Occupants: ${occupants}
* Neighborhood Security Level: ${neighborhoodSecurity}

**Current Security Systems:**
${existingSecurity === 'None' ? 
  'No existing security systems reported. This represents a significant vulnerability that should be addressed promptly.' : 
  `The property currently utilizes ${existingSecurity}. While these measures provide some level of security, our assessment has identified several areas for improvement.`
}

**Security Incident History:**
${securityIncidents === 'None reported' ? 
  'No past security incidents have been reported. However, this does not guarantee future safety without proper security measures.' : 
  `The property has experienced the following security incidents: ${securityIncidents}. These incidents highlight specific vulnerabilities that need to be addressed.`
}

## 3. VULNERABILITIES AND RISKS

Based on the information provided, we have identified the following security vulnerabilities:

${vulnerabilities.map((v, i) => `
### ${i+1}. ${v.item} (${v.risk.toUpperCase()} RISK)

**Description:** ${v.description}

**Potential Impact:** ${v.risk === 'high' ? 
  'This vulnerability could lead to significant security breaches, property loss, or safety risks.' : 
  v.risk === 'medium' ? 
  'This vulnerability presents moderate risk and could potentially be exploited by determined intruders.' : 
  'This vulnerability presents a lower immediate risk but should still be addressed for optimal security.'
}

**Recommendation:** ${v.recommendation}

${riskLevels[v.risk as keyof typeof riskLevels]}
`).join('\n')}

## 4. RECOMMENDATIONS

Based on your ${propertyType.toLowerCase()} property type and expressed security concerns, we recommend the following security enhancements:

${recommendations.slice(0, 10).map((r, i) => `### ${i+1}. ${r}`).join('\n\n')}

These recommendations have been tailored to your specific situation and prioritized based on risk level, budget considerations (${budget}), and implementation timeline preference (${timeline}).

## 5. AUDIT SUGGESTIONS

To further improve your security posture, consider implementing these additional measures specific to your situation:

### Audit Frequency
Based on your property type and risk level, we recommend conducting security audits every ${propertyTypeKey === 'retail' || propertyTypeKey === 'industrial' ? '3-6 months' : '6-12 months'} to ensure your security measures remain effective.

### Personnel Training
${vulnerabilities.length > 3 ? 'Due to the number of identified vulnerabilities, we strongly recommend' : 'We recommend'} implementing a comprehensive security awareness program for all staff. Training should cover:
* Recognizing security threats
* Proper response to suspicious activities
* Emergency procedures
* Proper use of security systems

### Documentation Improvements
Maintain detailed records of:
* All security incidents, no matter how minor
* Regular maintenance of security equipment
* Staff security training
* Visitor logs and access records

### Risk Management Plan
Develop a formal security risk management plan that includes:
* Regular risk assessments
* Designated security responsibilities
* Incident response protocols
* Business continuity procedures

### Technology Updates
Schedule regular evaluations of your security technology to ensure it meets current standards and addresses evolving threats.

## 6. IMPLEMENTATION PLAN

To effectively enhance your security posture, we recommend the following phased implementation approach:

${implementationPlan.map(phase => `
### ${phase.phase}

${phase.actions.length > 0 ? 
  phase.actions.map((a, i) => `${i+1}. ${a}`).join('\n') : 
  'No actions scheduled for this phase based on your implementation timeline preference.'
}
`).join('\n')}

**Budget Considerations:**
${budget === 'Limited' ? 
  'Given your budget constraints, we have prioritized the most critical security measures in the early phases. Additional measures can be implemented over time as budget allows.' : 
  budget === 'Moderate' ? 
  'With your moderate budget, a balanced approach to implementation is recommended, focusing on high-risk vulnerabilities first while planning for medium-risk issues in later phases.' : 
  'Your flexible budget allows for a comprehensive security implementation. We recommend addressing all identified vulnerabilities within the proposed timeline.'
}

## 7. CONCLUSION

This security audit has identified several areas where your property's security can be significantly improved. By implementing the recommendations outlined in this report according to the proposed timeline, you can substantially enhance the safety and security of your property, assets, and occupants.

We recommend scheduling a follow-up security assessment in 6 months to evaluate the effectiveness of implemented security measures and identify any new vulnerabilities that may have emerged.

For any questions regarding this report or assistance with implementing these recommendations, please contact our security consulting team.

_Report generated on: ${new Date().toLocaleDateString()}_
`;

    return report;
  } catch (error) {
    console.error('Error generating security report:', error);
    throw new Error('Failed to generate security report');
  }
}
