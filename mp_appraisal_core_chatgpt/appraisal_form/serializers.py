from rest_framework import serializers

from .models import Appraisal


class AppraisalFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appraisal
        fields = ['product_knowledge', 'system_knowledge', 'sales_promotion_skills',
                  'private_label_promotion_skills', 'customer_interaction_skills', 'comments']
